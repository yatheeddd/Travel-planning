const budgetService = require('../services/budgetService');
const tripModel = require('../models/tripModel');

/**
 * GET /api/budget/:tripId
 * Returns calculated budget summary for a trip. Protected - only owner.
 */
async function getBudgetSummary(req, res, next) {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    if (!(await tripModel.isOwner(tripId, req.user.id))) return res.status(403).json({ error: 'Forbidden' });

    const summary = await budgetService.calculateBudgetForTrip(tripId);
    res.json(summary);
  } catch (err) {
    next(err);
  }
}

module.exports = { getBudgetSummary };
