"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../data/db"));
//import productsServices from '../services/productsServices';
const productsRouter = express_1.default.Router();
productsRouter.get('/', (_req, res) => {
    // products services is used below
    db_1.default.query("SELECT * FROM characters ORDER BY character_id", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});
exports.default = productsRouter;
