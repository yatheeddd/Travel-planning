const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');
const { authenticate } = require('../middleware/auth');

// All trip-related routes are protected
router.use(authenticate);

// POST /api/trips
router.post('/', tripController.createTrip);

// GET /api/trips/:userId
router.get('/:userId', tripController.getTripsByUser);

// PUT /api/trips/:tripId
router.put('/:tripId', tripController.updateTrip);

// DELETE /api/trips/:tripId
router.delete('/:tripId', tripController.deleteTrip);

// POST /api/trips/:tripId/stops handled in stops router which is mounted separately

module.exports = router;
