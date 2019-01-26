exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("FoodItems")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("FoodItems").insert([
        {
          id: 20001,
          itemName: "milk",
          description: "Zany Zeus, 2 Litre, Organic",
          dateIn: "27/01/19",
          useBy: "30/01/19",
          user_id: 1
        },
        {
          id: 20002,
          itemName: "lentils",
          description: "Blue container",
          dateIn: "28/01/19",
          useBy: "02/02/19",
          user_id: 2
        },
        {
          id: 20003,
          itemName: "butter",
          description: "Lorak, 250grams",
          dateIn: "27/01/19",
          useBy: "01/03/19",
          user_id: 4
        }
      ]);
    });
};
