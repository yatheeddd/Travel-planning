const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Public search endpoints (no auth required)
router.get('/cities', searchController.searchCities);
router.get('/activities', searchController.searchActivities);

module.exports = router;
