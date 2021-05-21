const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development

const knexfile = require("../knexfile")[environment];
console.log(knexfile);
const knex = require("knex")(knexfile);
module.exports = knex;
