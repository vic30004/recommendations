// Update with your config settings.
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      port: "",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
    },
    seeds: {
      directory: __dirname + "/db/seed",
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "password",
      database: "recommendations",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds/production",
    },
    useNullAsDefault: true,

    pool: {
      min: 2,
      max: 10,
    },
  },
};
