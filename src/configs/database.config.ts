import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

// https://node-postgres.com/apis/pool#new-pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? "5432"),
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export default pool;
