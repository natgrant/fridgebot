const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

module.exports = {
  getUsers,
  getFoodItems,
  findUser
};

function getUsers(db = database) {
  return db("users").select();
}

function findUser(id, db = database) {
  return db("users")
    .where({ id })
    .first();
}

function getFoodItems(userId, db = database) {
  console.log(userId);
  return db("foodItems")
    .where({ user_id: userId })
    .then(items => items);
}
