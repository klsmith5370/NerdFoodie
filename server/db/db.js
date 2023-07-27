const Sequelize = require("sequelize");
const pkg = require("../../package.json");
// const { createClient } = require("@supabase/supabase-js")

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
    config
);

// Setting up the database to be used with Supabase

// const supabase = createClient()
  
module.exports = db;