const dbhelpers = require('../database/database-helpers');
const serverHelpers = require('./helpers');

const saveUser = dbhelpers.saveUser;
const updatePreferences = dbhelpers.updatePreferences;
const matchMaker = dbhelpers.matchMaker;
const addUserLocation = serverHelpers.addUserLocation;

// app.post('/signup', cb)

module.exports = (app) => {
  app.post('/email', (req) => {
    // Get IP of Connected User
    const ip = (req.connection.remoteAddress).slice(7);
    console.log(req, 'request');
    console.log(ip, 'ip address');
  });
};

/* TODO: app.get('/', )


// Call Helper to send User IP to ipStack API and get location

*/
