/**
 * Database pool using `pg` (PostgreSQL).
 * If you want MySQL instead, swap this file to use `mysql2` and adjust queries.
 */
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });

pool.on('error', (err) => {
  console.error('Unexpected idle client error', err);
  process.exit(-1);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};
