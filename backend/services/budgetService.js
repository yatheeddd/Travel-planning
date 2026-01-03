const db = require('../db');

/**
 * Business logic to calculate budgets and cost breakdowns.
 * Returns:
 *  - total_cost
 *  - cost_by_city [{ city_id, city_name, total_cost }]
 *  - cost_by_day [{ date, total_cost }]
 *  - category_costs [{ category, total_cost }]
 *  - overbudget_days [{ date, total_cost, daily_budget }]
 */
async function calculateBudgetForTrip(tripId) {
  // Fetch trip stops and activities
  const stopsRes = await db.query(`SELECT ts.*, c.name as city_name FROM trip_stops ts JOIN cities c ON ts.city_id = c.id WHERE ts.trip_id = $1`, [tripId]);
  const stops = stopsRes.rows;

  // Fetch activities for the trip
  const actsRes = await db.query(`SELECT ta.*, a.category, a.name as activity_name, ts.city_id, ts.start_date, ts.end_date FROM trip_activities ta JOIN activities a ON ta.activity_id = a.id JOIN trip_stops ts ON ta.stop_id = ts.id WHERE ts.trip_id = $1`, [tripId]);
  const activities = actsRes.rows;

  // Cost by city
  const costByCity = {};
  let totalCost = 0;
  for (const a of activities) {
    const cId = a.city_id;
    costByCity[cId] = costByCity[cId] || { city_id: cId, city_name: null, total_cost: 0 };
    costByCity[cId].total_cost += parseFloat(a.cost || 0);
    totalCost += parseFloat(a.cost || 0);
  }

  // Attach city_name by querying cities for missing names
  for (const key of Object.keys(costByCity)) {
    const r = await db.query(`SELECT name FROM cities WHERE id = $1`, [costByCity[key].city_id]);
    costByCity[key].city_name = r.rows[0] ? r.rows[0].name : null;
  }

  // Cost by day: map each scheduled_time (date part)
  const costByDay = {};
  for (const a of activities) {
    const dateKey = new Date(a.scheduled_time).toISOString().slice(0, 10);
    costByDay[dateKey] = costByDay[dateKey] || 0;
    costByDay[dateKey] += parseFloat(a.cost || 0);
  }

  // Category-wise cost
  const categoryCosts = {};
  for (const a of activities) {
    const cat = a.category || 'uncategorized';
    categoryCosts[cat] = (categoryCosts[cat] || 0) + parseFloat(a.cost || 0);
  }

  // Fetch daily budget if exists
  const budgetRes = await db.query(`SELECT * FROM budgets WHERE trip_id = $1`, [tripId]);
  const budget = budgetRes.rows[0] || null;

  // Overbudget detection
  const overbudgetDays = [];
  if (budget && budget.daily_budget) {
    for (const [date, amount] of Object.entries(costByDay)) {
      if (amount > parseFloat(budget.daily_budget)) {
        overbudgetDays.push({ date, total_cost: amount, daily_budget: parseFloat(budget.daily_budget) });
      }
    }
  }

  return {
    total_cost: totalCost,
    cost_by_city: Object.values(costByCity),
    cost_by_day: Object.entries(costByDay).map(([date, total_cost]) => ({ date, total_cost })),
    category_costs: Object.entries(categoryCosts).map(([category, total_cost]) => ({ category, total_cost })),
    overbudget_days: overbudgetDays,
    budget: budget,
  };
}

module.exports = { calculateBudgetForTrip };
