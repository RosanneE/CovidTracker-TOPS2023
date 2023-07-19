// Import the Pool class from the 'pg' module.
// The Pool class is used to create a pool of reusable connections to a PostgreSQL database.
// const { Pool } = require("pg");

// Create a new Pool object.
// This will create a pool of connections to the PostgreSQL database specified by the configuration object.
// Each property of this object is a parameter for connecting to the database.
// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DATABASE,
//   password: process.env.PASSWORD,
//   port: process.env.PORT,
// });

// module.exports = pool;

// Knex DB file

const knex = require("knex");

const knexfile = require("./knexfile")

const env = process.nextTick.NODE_ENV || "development"
const configOptions = knexfile[env]

module.exports = knex(configOptions)