const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: 'wesam',
  port: 5432,
});

module.exports = pool;
