const express = require('express');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });
const bodyParser = require('body-parser');
const useRoutes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', useRoutes);

module.exports = app;
