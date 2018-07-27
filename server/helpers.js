const axios = require('axios');
const config = require('./config');
const dbhelpers = require('../database/database-helpers');

const saveUser = dbhelpers.saveUser;
const updateLocation = dbhelpers.updateLocation;
const updatePreferences = dbhelpers.updatePreferences;
const matchMaker = dbhelpers.matchMaker;

const key = config.IPStack_API_KEY;

// addUserLocation successfully makes ipStack API Call and updates user's location
const addUserLocation = (email, ipAddress) => axios({
  method: 'get',
  url: `http://api.ipstack.com/${ipAddress}?access_key=${key}&fields=main`,
  dataType: 'jsonp'
})
  .then(response => response.data.city)
// this can be updated later in order to save more of the location data than just the city
  .then(city => updateLocation(email, city))
  .catch((error) => {
    console.error(error);
  });


module.exports = {
  addUserLocation,
};
