const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

module.exports = {
  getUsers,
  getUser
};

function getUsers(db = database) {
  return db("users").select();
}

function getUser(id, db = database) {
  return db("users")
    .where({ id: id })
    .then(data => console.log(data));
}
