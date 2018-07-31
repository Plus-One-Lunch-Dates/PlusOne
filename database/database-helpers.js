const db = require('./index.js');

const { User } = db;

const saveUser = (firstName, lastName, username, number, email, password) => {
  const user = new User({
    firstName,
    lastName,
    username,
    number,
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
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate(query, { location }, { new: true }, (err, updatedModel) => {
      if (err) {
        reject(err);
      }
      resolve(updatedModel);
    });
  });
};

const updatePreferences = (email, cravings, price, attire) => {
  const query = { email };
  User.findOneAndUpdate(query, { cravings, price, attire }, { new: true }, (err, updatedModel) => {
    if (err) {
      console.error(err, 'Something wrong when updating database!');
    }
  });
};

const matchMaker = (user) => {
  const query = {
    location: user.location,
    cravings: user.cravings,
    price: user.price,
    attire: user.attire
  };
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
