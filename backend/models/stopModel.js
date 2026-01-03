const db = require('../db');

/**
 * trip_stops table operations and trip_activities operations
 */
async function createStop({ trip_id, city_id, start_date, end_date, stop_order }) {
  const res = await db.query(
    `INSERT INTO trip_stops (trip_id, city_id, start_date, end_date, stop_order) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
    [trip_id, city_id, start_date, end_date, stop_order]
  );
  return res.rows[0];
}

async function findStop(stopId) {
  const res = await db.query(`SELECT * FROM trip_stops WHERE id = $1`, [stopId]);
  return res.rows[0];
}

async function addActivityToStop({ stop_id, activity_id, scheduled_time, cost }) {
  const res = await db.query(
    `INSERT INTO trip_activities (stop_id, activity_id, scheduled_time, cost) VALUES ($1,$2,$3,$4) RETURNING *`,
    [stop_id, activity_id, scheduled_time, cost]
  );
  return res.rows[0];
}

module.exports = { createStop, findStop, addActivityToStop };
