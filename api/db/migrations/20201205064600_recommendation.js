exports.up = function (knex) {
  return knex.schema.createTable("recommendation", (table) => {
    table.increments("id").primary();
    table.string("title");
    table.string("description", 300);
    table.string("category");
    table.string("main_picture", 4000);
    table.timestamps(true, true);
    table.integer("follow").defaultTo(0);
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("recommendation");
};
