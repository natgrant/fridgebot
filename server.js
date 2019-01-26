const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");

const server = express();

// Middleware

server.engine("hbs", hbs({ extname: "hbs", defaultLayout: "main" }));
server.set("view engine", "hbs");
set.use(express.static("public"));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

// Routes

server.use("/", userRoutes);

module.exports = server;
