<<<<<<< HEAD
const express = require('express');
const { urlencoded, json } = require('body-parser');
const { join } = require('path');

const app = express();

app.use(urlencoded({ extended: false }));

app.use(json());

// Harvey's middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.use(express.static(join(__dirname, '../dist/mean-angular6')));


module.exports = app;
=======
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
>>>>>>> 909386f65979aeead0f2d81197e054e2bac1eda6
