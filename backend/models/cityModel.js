const db = require('../db');

/**
 * City model: basic search and retrieval
 */
async function findCityById(id) {
  const res = await db.query(`SELECT * FROM cities WHERE id = $1`, [id]);
  return res.rows[0];
}

async function searchCities({ q, country, limit = 50 }) {
  const clauses = [];
  const vals = [];
  let idx = 1;
  if (q) { clauses.push(`name ILIKE $${idx++}`); vals.push(`%${q}%`); }
  if (country) { clauses.push(`country ILIKE $${idx++}`); vals.push(`%${country}%`); }
  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const res = await db.query(`SELECT id, name, country, cost_index FROM cities ${where} ORDER BY name LIMIT $${idx}`, [...vals, limit]);
  return res.rows;
}

module.exports = { findCityById, searchCities };
