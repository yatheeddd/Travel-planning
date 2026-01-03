const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');
const Joi = require('joi');

// Validation schema
const signupSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

/**
 * POST /api/auth/signup
 * - Validates input, hashes password, creates user, returns JWT
 * Comments:
 *  - Passwords are hashed using bcrypt before storing to prevent password leakage even if DB is compromised.
 *  - We issue a JWT to allow stateless authentication for subsequent requests.
 */
async function signup(req, res, next) {
  try {
    const { error, value } = signupSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const existing = await findUserByEmail(value.email);
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    const saltRounds = 10;
    const hashed = await bcrypt.hash(value.password, saltRounds);
    const user = await createUser({ name: value.name, email: value.email, password: hashed });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
    res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    next(err);
  }
}

const loginSchema = Joi.object({ email: Joi.string().email().required(), password: Joi.string().required() });

/**
 * POST /api/auth/login
 * - Validates credentials, returns JWT
 */
async function login(req, res, next) {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const user = await findUserByEmail(value.email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(value.password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    next(err);
  }
}

module.exports = { signup, login };
