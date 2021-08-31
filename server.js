const express = require("express");
const path = require("path");
//paths
const routes = require("./controllers");
//handlebars
const exphbs = require("express-handlebars");
//Sequelize
const sequelize = require("./config/connection");

const session = require('express-session');

const sess = {
  secret: process.env.DB_SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


//initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

//middlewear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


//use controllers
app.use("/", controller);

//set handlebars as render engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });