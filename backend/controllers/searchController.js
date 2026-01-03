const cityModel = require('../models/cityModel');
const activityModel = require('../models/activityModel');

/**
 * GET /api/search/cities?q=&country=&limit=
 * Returns list of cities matching query. Useful for adding stops in the itinerary builder.
 */
async function searchCities(req, res, next) {
  try {
    const { q, country, limit } = req.query;
    const l = limit ? parseInt(limit, 10) : 50;
    const rows = await cityModel.searchCities({ q, country, limit: l });
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/search/activities?q=&category=&minCost=&maxCost=&limit=
 * Returns activities to add to stops.
 */
async function searchActivities(req, res, next) {
  try {
    const { q, category, minCost, maxCost, limit } = req.query;
    const l = limit ? parseInt(limit, 10) : 50;
    const rows = await activityModel.searchActivities({ q, category, minCost, maxCost, limit: l });
    res.json(rows);
  } catch (err) {
    next(err);
  }
}

module.exports = { searchCities, searchActivities };
