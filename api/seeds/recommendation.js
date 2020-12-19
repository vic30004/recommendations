
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recommendation').del()
    .then(function () {
      // Inserts seed entries
      return knex('recommendation').insert([
        {id: 1, title: 'test', description:"test", category:"test", "main_picture":"test"},

      ]);
    });
};
