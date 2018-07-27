const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index')
const dbhelpers = require('../database/database-helpers');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Harvey's middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.use(express.static(path.join(__dirname, '../dist/mean-angular6')));

module.exports = app;
