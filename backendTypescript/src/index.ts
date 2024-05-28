import express from 'express';
// import productsRouter from './routes/products';

const app = express();
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
