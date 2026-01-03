const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const { authenticate } = require('../middleware/auth');

// GET /api/budget/:tripId - protected
router.get('/:tripId', authenticate, budgetController.getBudgetSummary);

module.exports = router;
