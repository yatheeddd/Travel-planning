const { v4: uuidv4 } = require('uuid');
const sharedModel = require('../models/sharedTripModel');
const tripModel = require('../models/tripModel');
const tripDetailsModel = require('../models/tripDetailsModel');

/**
 * GET /api/public/:slug
 * Returns a public, read-only view of the trip identified by slug.
 */
async function getPublicTrip(req, res, next) {
  try {
    const slug = req.params.slug;
    const record = await sharedModel.findBySlug(slug);
    if (!record || !record.is_public) return res.status(404).json({ error: 'Public trip not found' });

    // Fetch trip details (stops, activities, budget)
    const details = await tripDetailsModel.getTripDetails(record.trip_id);
    res.json(details);
  } catch (err) {
    next(err);
  }
}

/**
 * POST /api/public/:tripId
 * Create a public slug for a trip or toggle its visibility. Expects authenticated user to be owner.
 */
async function makeTripPublic(req, res, next) {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    if (!(await tripModel.isOwner(tripId, req.user.id))) return res.status(403).json({ error: 'Forbidden' });

    // Create slug and mark public
    const slug = uuidv4();
    const record = await sharedModel.createOrUpdate({ trip_id: tripId, public_slug: slug, is_public: true });
    res.json({ slug: record.public_slug, url: `/api/public/${record.public_slug}` });
  } catch (err) {
    next(err);
  }
}

module.exports = { getPublicTrip, makeTripPublic };
