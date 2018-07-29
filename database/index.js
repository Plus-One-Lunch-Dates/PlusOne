const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const tokens = require('./database-config.js');

const USER_MONGODB = tokens.USER_MONGODB;
const PROD_MONGODB = tokens.PROD_MONGODB;

mongoose.connect(`mongodb://${USER_MONGODB}:${PROD_MONGODB}@ds145951.mlab.com:45951/plus-one`);

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: false },
  cravings: { type: String, required: false },
  price: { type: String, required: false },
  attire: { type: String, required: false },
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = {
  User: User
};
