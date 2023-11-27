const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const { extractPhotos } = require('./photos.js');
require("dotenv").config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`https://photos.app.goo.gl/${id}`)
    res.send(extractPhotos(response.data));
  }
  catch(error) {
    response.status(500);

  }
  
})

app.use(cors());
const port = 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})
