import express from 'express';
const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const cors = require('cors');
// require("dotenv").config();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get("/:id",(_req, res) => {
    res.send("hello there");
});

const port = 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
