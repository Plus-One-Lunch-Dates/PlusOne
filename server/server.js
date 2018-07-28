const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
// eslint-disable-next-line
const { checkExistingUser, saveUser, updatePreferences, matchMaker } = require('../database/database-helpers');
const { createSession, getUserLocation } = require('./helpers.js');

const app = express();

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Harvey's middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});

app.use(express.static(path.join(__dirname, '../dist/mean-angular6')));

// TODO: Test me - Looks good in debugger
// Sign up for new account
app.post('/signup', (req, res) => {
  // eslint-disable-next-line
  const { firstName, lastName, email, password } = req.body;

  saveUser(firstName, lastName, email, password);
  res.sendStatus(201);
});

// TODO: Test me - Looks good in debugger
// User Login - Check if user exists in DB + Check if P/W Matches in DB
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  checkExistingUser(email);
  if (checkExistingUser[0].password === password) {
    createSession(req, res);
    res.sendStatus(201);
  } else {
    res.redirect('./login');
    res.sendStatus(404);
  }
});

// TODO: Test me - - - - Make sure we have access to the email from client
// Meaning - - - - Do we retain it via session?
// User submits preferences and looks for a match
app.put('/home/:email', (req, res) => {
  const { remoteAddress } = req.connection;
  // eslint-disable-next-line
  const { email, cravings, price, attire } = req.body; // TODO: Log to check req.body and IP 
  const userIP = remoteAddress.slice(7);
  updatePreferences(email, cravings, price, attire);
  getUserLocation(email, userIP)
  // FIXME: Promisify/Get actual updatedModel from updateLocation out of this
  // to pass into matchMaker
    .then(matchMaker(/* see above */));
  res.sendStatus(200);
});

module.exports = app;
