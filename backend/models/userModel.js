const db = require('../db');

/**
 * User model queries. Uses parameterized queries to avoid SQL injection.
 */
async function createUser({ name, email, password }) {
  const res = await db.query(
    `INSERT INTO users (name, email, password, created_at) VALUES ($1, $2, $3, now()) RETURNING id, name, email`,
    [name, email, password]
  );
  return res.rows[0];
}

async function findUserByEmail(email) {
  const res = await db.query(`SELECT id, name, email, password FROM users WHERE email = $1`, [email]);
  return res.rows[0];
}

module.exports = { createUser, findUserByEmail };
