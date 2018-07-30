const axios = require('axios');
const config = require('../database/database-config2.js');
const { updateLocation } = require('../database/database-helpers');

const key = config.IPStack_API_KEY;

const isLoggedIn = req => (req.session ? !!req.session.user : false);

const checkIfUserLoggedIn = (req, res, next) => {
  if (!isLoggedIn(req)) {
    res.redirect('/login');
  } else {
    next();
  }
};

const createSession = (req, res) => {
  console.log('Session Created');
  return req.session.regenerate((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/home/:email');
  });
};

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};

// addUserLocation successfully makes ipStack API Call and updates user's location
const getUserLocation = (email, ipAddress) => axios({
  method: 'get',
  url: `http://api.ipstack.com/${ipAddress}?access_key=${key}&fields=main`,
  dataType: 'jsonp'
})
  .then(response => response.data.city)
// TODO: this can be updated later in order to save more of the location data than just the city
  .then(city => updateLocation(email, city))
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  checkIfUserLoggedIn, createSession, getUserLocation, logoutUser
};
