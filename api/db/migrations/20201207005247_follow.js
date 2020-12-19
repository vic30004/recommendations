exports.up = function (knex) {
  return knex.schema.createTable("follow", (table) => {
    table.increments("id").primary();
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("recommendation_id")
      .references("id")
      .inTable("recommendation")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
    return knex.schema.dropTable("follow")
};
