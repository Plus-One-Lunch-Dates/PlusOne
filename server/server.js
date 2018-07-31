const express = require('express');
const { urlencoded, json } = require('body-parser');
const { join } = require('path');
const session = require('express-session');
const { mapSeries } = require('bluebird');
const {
  checkExistingUser,
  saveUser,
  updatePreferences,
  matchMaker,
} = require('../database/database-helpers');
const {
  createSession,
  getUserLocation,
  logoutUser
} = require('./helpers.js');

const app = express();

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: true
}));

app.use(urlencoded({ extended: false }));

app.use(json());

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`);
  next();
});
// Serve compiled files
app.use(express.static(join(__dirname, '../dist/plus-one-app')));

// Sign up for new account
app.post('/signup', (req, res) => {
  const {
    firstName,
    lastName,
    username,
    number,
    email,
    password
  } = req.body;
  saveUser(firstName, lastName, username, number, email, password);
  res.sendStatus(201);
});

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
// User submits preferences and submits for a match
app.post('/home/email', (req, res) => {
  const {
    email,
    cravings,
    price,
    attire
  } = req.body;
  const userIP = req.ip;
  updatePreferences(email, cravings, price, attire);
  getUserLocation(email, userIP)
    .then(userModel => matchMaker(userModel))
    .then(promisedMatches => mapSeries(promisedMatches, promisedMatch => promisedMatch))
    .then((matches) => {
      if (matches.length < 1) {
        res.redirect('/home/email');
      } else {
        let match = 'No Matches Found';
        for (let i = 0; i < matches.length; i += 1) {
          if (matches[i].email !== email) {
            match = { number: matches[i].number, name: matches[i].firstName };
            return match;
          }
          return match;
        }
      }
    })
    .then((match) => {
      res.send(match);
    })
    .catch(err => console.error(err));
});

// Logout user references function that destroys session
app.get('/logout', logoutUser);

module.exports = app;
