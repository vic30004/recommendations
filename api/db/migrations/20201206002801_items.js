
exports.up = function(knex) {
  return knex.schema.createTable("items",(table)=>{
      table.increments("id").primary();
      table.string("title");
      table.string("description", 4000);
      table.string("cover_picture",4000);
      table.timestamps(true,true);
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
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("items")
};
