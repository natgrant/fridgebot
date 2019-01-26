const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.render("home", { users });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/profile/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  db.getUser(id).then(user => {
    res.render("profile", user);
  });
});

module.exports = router;
