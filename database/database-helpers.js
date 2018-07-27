const db = require('./index.js');

const User = db.User;


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

const updateUser = (email, location, cravings, price, attire) => {
  const query = { email };
  User.findOneAndUpdate(query, { location, cravings, price, attire }, { new : true }, function(err, updatedModel){
    if(err){
        console.log("Something wrong when updating database!");
    }
    // TODO: Decide if we want to do anything else with this updated model here. Maybe pass in matchMaking helper as a cb?
    console.log(updatedModel);
  });
}

const matchMaker = (user) => {
  //will return a promise that will resolve into an array of matches which will include the user
  //.then and .catch will need to be used when dealing with this function in the server
  const query = { location: user.location };
  return new Promise((resolve, reject) => {
    User.find(query, (err, matches) => {
      if (err) {
        reject(error);      }
      else {
        resolve(matches);
      };
    });
  });
};

module.exports = {
  saveUser,
  updateUser
  };