const express = require("express");
const routes = require("./controllers");
const path = require("path");
const sequelize = require("./config/connection");


const helpers = require('./utils/helpers');
const exphbs = require("express-handlebars");

const session = require('express-session');

//initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);


const sess = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};




//middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


//set handlebars as render engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
