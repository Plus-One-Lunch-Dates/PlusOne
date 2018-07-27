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

updateUser('email', 'location', 'cravings', 'price', 'attire');

module.exports = {
  saveUser,
  updateUser
  };