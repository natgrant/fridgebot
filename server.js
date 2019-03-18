const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");

const server = express();

server.engine("hbs", hbs({ extname: "hbs", defaultLayout: "main" }));
server.set("view engine", "hbs");
server.use(express.static("public"));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

server.use("/", userRoutes);

module.exports = server;
