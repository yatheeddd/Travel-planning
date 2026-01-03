const Joi = require('joi');
const tripModel = require('../models/tripModel');

const tripSchema = Joi.object({
  trip_name: Joi.string().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  description: Joi.string().allow('', null),
});

/**
 * POST /api/trips
 * Create a trip for the authenticated user.
 */
async function createTrip(req, res, next) {
  try {
    const { error, value } = tripSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const trip = await tripModel.createTrip({ user_id: req.user.id, ...value });
    res.status(201).json(trip);
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/trips/:userId
 * Return trips for a user. Only allow a user to read their own trips.
 */
async function getTripsByUser(req, res, next) {
  try {
    const requestedUserId = parseInt(req.params.userId, 10);
    if (requestedUserId !== req.user.id) return res.status(403).json({ error: 'Forbidden' });

    const trips = await tripModel.getTripsByUser(requestedUserId);
    res.json(trips);
  } catch (err) {
    next(err);
  }
}

/**
 * PUT /api/trips/:tripId
 * Update a trip; only owner may update.
 */
async function updateTrip(req, res, next) {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    const allowed = await tripModel.isOwner(tripId, req.user.id);
    if (!allowed) return res.status(403).json({ error: 'Forbidden' });

    const updated = await tripModel.updateTrip(tripId, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE /api/trips/:tripId
 */
async function deleteTrip(req, res, next) {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    const allowed = await tripModel.isOwner(tripId, req.user.id);
    if (!allowed) return res.status(403).json({ error: 'Forbidden' });

    await tripModel.deleteTrip(tripId);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { createTrip, getTripsByUser, updateTrip, deleteTrip };
