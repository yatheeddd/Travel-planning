const db = require('../db');

async function createOrUpdateBudget({ trip_id, daily_budget, total_budget }) {
  const existing = await db.query(`SELECT id FROM budgets WHERE trip_id = $1`, [trip_id]);
  if (existing.rows.length) {
    const res = await db.query(`UPDATE budgets SET daily_budget=$1, total_budget=$2 WHERE trip_id=$3 RETURNING *`, [daily_budget, total_budget, trip_id]);
    return res.rows[0];
  }
  const res = await db.query(`INSERT INTO budgets (trip_id, daily_budget, total_budget) VALUES ($1,$2,$3) RETURNING *`, [trip_id, daily_budget, total_budget]);
  return res.rows[0];
}

module.exports = { createOrUpdateBudget };
