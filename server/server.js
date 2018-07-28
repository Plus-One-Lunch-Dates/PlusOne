const express = require('express');
const { urlencoded, json } = require('body-parser');
const path = require('path');
const session = require('express-session');
const { mapSeries } = require('bluebird');
// eslint-disable-next-line
const { checkExistingUser, saveUser, updatePreferences, matchMaker } = require('../database/database-helpers');
const { createSession, getUserLocation } = require('./helpers.js');

const app = express();

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: true
}));

app.use(urlencoded({ extended: false }));

app.use(json());

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
  checkExistingUser(email)
    .then((user) => {
      if (user[0].password === password) {
        createSession(req, res);
      } else {
        res.redirect('/login');
      }
    })
    .catch(err => console.error(err, 'Error chceking user'));
});

// User submits preferences and looks for a match
app.post('/home/:email', (req, res) => {
  // console.log(req.connection.remoteAddress, 'req.connection.remoteAddress');
  // console.log(req.connection, 'req.connection');
  const { remoteAddress } = req.connection;
  // eslint-disable-next-line
  const { email, cravings, price, attire } = req.body; 
  // TODO: Log to check req.body and IP
  const userIP = remoteAddress.slice(7);
  console.log(userIP, 'userIP');
  updatePreferences(email, cravings, price, attire);
  getUserLocation(email, userIP)
    .then(userModel => matchMaker(userModel))
    .then(promisedMatches => mapSeries(promisedMatches, promisedMatch => promisedMatch))
    .then((matches) => {
      if (matches.length < 1) {
        res.redirect('/home/:email');
      } else {
        // TODO: Need to send the [0] from returned matches.
        console.log(matches[0], 'matches[0] Match Found!');
        res.redirect('/chat');
      }
    })
    .catch(err => console.error(err));
});

module.exports = app;
