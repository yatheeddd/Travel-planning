const express = require('express');
const router = express.Router();
const publicController = require('../controllers/publicController');

// GET /api/public/:slug - public read-only itinerary
router.get('/:slug', publicController.getPublicTrip);

// POST /api/public/:tripId - create or toggle public sharing (protected route expected to be called by owner)
router.post('/:tripId', publicController.makeTripPublic);

module.exports = router;
