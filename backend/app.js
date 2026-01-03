require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const tripRoutes = require('./routes/trips');
const stopRoutes = require('./routes/stops');
const publicRoutes = require('./routes/public');
const budgetRoutes = require('./routes/budget');
const searchRoutes = require('./routes/search');

app.use('/api/auth', authRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api', stopRoutes); // endpoints like /api/stops/:stopId/activities
app.use('/api/public', publicRoutes);
app.use('/api/budget', budgetRoutes);
app.use('/api/search', searchRoutes);

// Centralized error handler
const { errorHandler } = require('./middleware/errorHandler');
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`GlobalTrotters backend listening on port ${PORT}`);
});
