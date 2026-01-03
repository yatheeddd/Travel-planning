const db = require('../db');

async function findActivityById(id) {
  const res = await db.query(`SELECT * FROM activities WHERE id = $1`, [id]);
  return res.rows[0];
}

async function searchActivities({ q, category, minCost, maxCost }) {
  // Basic example; production should use full-text search or external service
  const clauses = [];
  const vals = [];
  let idx = 1;
  if (q) { clauses.push(`name ILIKE $${idx++}`); vals.push(`%${q}%`); }
  if (category) { clauses.push(`category = $${idx++}`); vals.push(category); }
  if (minCost !== undefined) { clauses.push(`average_cost >= $${idx++}`); vals.push(minCost); }
  if (maxCost !== undefined) { clauses.push(`average_cost <= $${idx++}`); vals.push(maxCost); }
  const where = clauses.length ? `WHERE ${clauses.join(' AND ')}` : '';
  const res = await db.query(`SELECT * FROM activities ${where} ORDER BY name LIMIT 50`, vals);
  return res.rows;
}

module.exports = { findActivityById, searchActivities };
