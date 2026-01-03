const Joi = require('joi');
const stopModel = require('../models/stopModel');
const tripModel = require('../models/tripModel');
const activityModel = require('../models/activityModel');

const stopSchema = Joi.object({ city_id: Joi.number().integer().required(), start_date: Joi.date().required(), end_date: Joi.date().required(), stop_order: Joi.number().integer().required() });
const addActivitySchema = Joi.object({ activity_id: Joi.number().integer().required(), scheduled_time: Joi.date().required(), cost: Joi.number().precision(2).required() });

/** POST /api/trips/:tripId/stops */
async function addStop(req, res, next) {
  try {
    const tripId = parseInt(req.params.tripId, 10);
    if (!(await tripModel.isOwner(tripId, req.user.id))) return res.status(403).json({ error: 'Forbidden' });

    const { error, value } = stopSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    const stop = await stopModel.createStop({ trip_id: tripId, ...value });
    res.status(201).json(stop);
  } catch (err) {
    next(err);
  }
}

/** POST /api/stops/:stopId/activities */
async function addActivityToStop(req, res, next) {
  try {
    const stopId = parseInt(req.params.stopId, 10);
    // Ensure the user owns the parent trip for the stop - model handles join
    const stop = await stopModel.findStop(stopId);
    if (!stop) return res.status(404).json({ error: 'Stop not found' });
    if (!(await tripModel.isOwner(stop.trip_id, req.user.id))) return res.status(403).json({ error: 'Forbidden' });

    const { error, value } = addActivitySchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.message });

    // Validate activity exists
    const activity = await activityModel.findActivityById(value.activity_id);
    if (!activity) return res.status(404).json({ error: 'Activity not found' });

    const inserted = await stopModel.addActivityToStop({ stop_id: stopId, ...value });
    res.status(201).json(inserted);
  } catch (err) {
    next(err);
  }
}

module.exports = { addStop, addActivityToStop };
