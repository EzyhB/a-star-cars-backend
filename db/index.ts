import { Pool } from "pg";

const connectionString = process.env.heroku_uri;

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};

export default query;
