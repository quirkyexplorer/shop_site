
import { QueryResult } from 'pg';
import express,  { Request, Response } from 'express';
import pool from '../data/db';
//import productsServices from '../services/productsServices';

const productsRouter = express.Router();

productsRouter.get('/', (_req: Request, res: Response) => {
  // products services is used below

  pool.query( "SELECT * FROM characters ORDER BY character_id",
    (error: Error , results: QueryResult) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
  
});

export default productsRouter;