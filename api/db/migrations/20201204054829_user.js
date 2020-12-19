
exports.up = function(knex) {
  return knex.schema.createTable("users", (table)=>{
      table.increments('id').primary();
      table.string("name");
      table.string("email").unique();
      table.string("username").unique();
      table.string("password");
      table.string("profile_picture", 4000)
      table.boolean("is_staff").defaultTo(false)
      table.boolean("admin").defaultTo(false)
      table.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
