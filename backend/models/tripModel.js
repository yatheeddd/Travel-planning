const db = require('../db');

/**
 * Trip model: trips table operations.
 * Relationship notes (in comments):
 * - users (1) -> trips (many): user_id foreign key in trips.
 * - trips (1) -> trip_stops (many): trip_id foreign key in trip_stops.
 */

async function createTrip({ user_id, trip_name, start_date, end_date, description }) {
  const res = await db.query(
    `INSERT INTO trips (user_id, trip_name, start_date, end_date, description) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [user_id, trip_name, start_date, end_date, description]
  );
  return res.rows[0];
}

async function getTripsByUser(userId) {
  const res = await db.query(`SELECT * FROM trips WHERE user_id = $1 ORDER BY start_date DESC`, [userId]);
  return res.rows;
}

async function isOwner(tripId, userId) {
  const res = await db.query(`SELECT user_id FROM trips WHERE id = $1`, [tripId]);
  const row = res.rows[0];
  return row && row.user_id === userId;
}

async function updateTrip(tripId, fields) {
  // Simple partial update builder
  const allowed = ['trip_name', 'start_date', 'end_date', 'description'];
  const sets = [];
  const vals = [];
  let idx = 1;
  for (const k of allowed) {
    if (fields[k] !== undefined) {
      sets.push(`${k} = $${idx++}`);
      vals.push(fields[k]);
    }
  }
  if (sets.length === 0) return null;
  vals.push(tripId);
  const q = `UPDATE trips SET ${sets.join(', ')} WHERE id = $${idx} RETURNING *`;
  const res = await db.query(q, vals);
  return res.rows[0];
}

async function deleteTrip(tripId) {
  await db.query(`DELETE FROM trips WHERE id = $1`, [tripId]);
}

module.exports = { createTrip, getTripsByUser, isOwner, updateTrip, deleteTrip };
