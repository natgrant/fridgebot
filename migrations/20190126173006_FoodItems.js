exports.up = function(knex, Promise) {
  return knex.schema.createTable("foodItems", t => {
    t.increments("id").primary();
    t.string("itemName");
    t.string("description");
    t.date("dateIn");
    t.date("useBy");
    t.integer("user_id")
      .references("id")
      .inTable("users");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("foodItems");
};
