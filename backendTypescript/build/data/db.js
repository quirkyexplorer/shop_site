"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'postgres',
    password: 'rock2own!',
    host: 'localhost',
    port: 5432,
    database: 'ProductsDb'
});
exports.default = pool;
