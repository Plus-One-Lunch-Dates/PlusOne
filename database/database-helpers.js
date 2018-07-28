const db = require('./index.js');

const { User } = db;

const saveUser = (firstName, lastName, email, password) => {
  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });
  return user.save((err) => {
    if (err) {
      console.error(err);
    }
  });
};

const updateLocation = (email, location) => {
  const query = { email };
  User.findOneAndUpdate(query, { location }, { new: true }, (err, updatedModel) => {
    if (err) {
      console.log('Something wrong when updating database!');
    }
    // TODO: Decide if we want to do anything else with this updated model here.
    // Maybe pass in matchMaking helper as a cb?
    console.log(updatedModel);
  });
};

const updatePreferences = (email, cravings, price, attire) => {
  const query = { email };
  User.findOneAndUpdate(query, { cravings, price, attire }, { new: true }, (err, updatedModel) => {
    if (err) {
      console.log('Something wrong when updating database!');
    }
    // TODO: Decide if we want to do anything else with this updated model here.
    // Maybe pass in matchMaking helper as a cb?
    console.log(updatedModel);
  });
};

const matchMaker = (user) => {
  // will return a promise that will resolve into an array of matches which will include the user
  // .then and .catch will need to be used when dealing with this function in the server
  const query = { location: user.location };
  return new Promise((resolve, reject) => {
    User.find(query, (err, matches) => {
      if (err) {
        reject(err);
      } else {
        resolve(matches);
      }
    });
  });
};

const checkExistingUser = (email) => {
  const query = { email };
  return new Promise((resolve, reject) => {
    User.find(query, (err, match) => {
      if (err) {
        reject(err);
      } else {
        console.log(match, 'match');
        resolve(match);
      }
    });
  });
};

module.exports = {
  saveUser,
  updateLocation,
  updatePreferences,
  matchMaker,
  checkExistingUser
};
