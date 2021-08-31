const { User } = require('../models');

const userData = [
  {
    username: "Laura",
    email: "laura@gmail.com",
    password: "password1234"
  },
  {
    username: "Sam",
    email: "Sam@gmail.com",
    password: "password1234"
  },
  {
    username: "Sammy",
    email: "Sammy@gmail.com",
    password: "password1234"
  },
  {
    username: "Emily",
    email: "emily@gmail.com",
    password: "password1234"
  },
  {
    username: "John",
    email: "john@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;