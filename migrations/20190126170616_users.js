exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", t => {
    t.increments("id").primary();
    t.string("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
