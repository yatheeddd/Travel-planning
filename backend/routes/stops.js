const express = require('express');
const router = express.Router();
const stopController = require('../controllers/stopController');
const { authenticate } = require('../middleware/auth');

// Add a stop to a trip - protected
router.post('/trips/:tripId/stops', authenticate, stopController.addStop);

// Add activity to a stop - protected
router.post('/stops/:stopId/activities', authenticate, stopController.addActivityToStop);

module.exports = router;
