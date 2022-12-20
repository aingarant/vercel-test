require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const message = process.env.MESSAGE;

app.get('/', (req, res) => {
  res.json({"message" : message});
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});