require("dotenv").config();

// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: "ruhamay",
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    debug: true,
    pool:{
      propagateCreateError: false,
      min: 0,
      max: 20,
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
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
    client: "postgresql",
    connection: {
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
