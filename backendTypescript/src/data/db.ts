/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'rock2own!',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'ProductsDb'
});

export default pool;