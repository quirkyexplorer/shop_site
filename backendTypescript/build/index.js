"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import productsRouter from './routes/products';
const app = (0, express_1.default)();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const cors = require('cors');
// require("dotenv").config();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
// app.get('/',  (_req, res) => {
// });
// app.use("/api/products", productsRouter);
// app.get("/",(_req, res) => {
//     res.send("hello there");
// });
const port = 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
