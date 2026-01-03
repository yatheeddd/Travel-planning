const db = require('../db');

async function findBySlug(slug) {
  const res = await db.query(`SELECT * FROM shared_trips WHERE public_slug = $1`, [slug]);
  return res.rows[0];
}

async function createOrUpdate({ trip_id, public_slug, is_public }) {
  const existing = await db.query(`SELECT id FROM shared_trips WHERE trip_id = $1`, [trip_id]);
  if (existing.rows.length) {
    const res = await db.query(`UPDATE shared_trips SET public_slug = $1, is_public = $2 WHERE trip_id = $3 RETURNING *`, [public_slug, is_public, trip_id]);
    return res.rows[0];
  }
  const res = await db.query(`INSERT INTO shared_trips (trip_id, public_slug, is_public) VALUES ($1,$2,$3) RETURNING *`, [trip_id, public_slug, is_public]);
  return res.rows[0];
}

module.exports = { findBySlug, createOrUpdate };
