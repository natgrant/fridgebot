const express = require("express");

const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      console.log(users);
      res.render("home", { users });
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message);
    });
});

router.get("/profile/:id", (req, res) => {
  db.findUser(req.params.id).then(user => {
    db.getFoodItems(user.id).then(items => {
      console.log(user, items);
      res.render("profile", { user, items });
    });
  });
});

module.exports = router;
