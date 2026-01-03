const db = require('../db');

/**
 * Helper to assemble full trip details: trip, stops, activities, budget
 */
async function getTripDetails(tripId) {
  const tripRes = await db.query(`SELECT * FROM trips WHERE id = $1`, [tripId]);
  const trip = tripRes.rows[0];
  if (!trip) return null;

  const stopsRes = await db.query(`SELECT ts.*, c.name as city_name, c.country FROM trip_stops ts JOIN cities c ON ts.city_id = c.id WHERE ts.trip_id = $1 ORDER BY stop_order`, [tripId]);
  const stops = stopsRes.rows;

  // For each stop, fetch activities
  for (const s of stops) {
    const acts = await db.query(`SELECT ta.*, a.name as activity_name, a.category FROM trip_activities ta JOIN activities a ON ta.activity_id = a.id WHERE ta.stop_id = $1 ORDER BY scheduled_time`, [s.id]);
    s.activities = acts.rows;
  }

  const budgetRes = await db.query(`SELECT * FROM budgets WHERE trip_id = $1`, [tripId]);
  const budget = budgetRes.rows[0] || null;

  return { trip, stops, budget };
}

module.exports = { getTripDetails };
