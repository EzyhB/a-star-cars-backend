import { Pool } from "pg";

const connectionString1 = process.env.heroku_uri;

const pool = new Pool({
  connectionString: connectionString1,
  ssl: { rejectUnauthorized: false },
});

const query = (text: string, params?: (string | number | boolean)[]) => {
  return pool.query(text, params);
};

export default query;
