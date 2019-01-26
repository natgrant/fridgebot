exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Caleb" },
        { id: 2, name: "Natalie" },
        { id: 3, name: "Lisa" },
        { id: 4, name: "Kimmy" }
      ]);
    });
};
