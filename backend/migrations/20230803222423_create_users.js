/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments();
    table.boolean("test_result");
    table.enu("test_taken", [
      "iHealth",
      "Abbott BinaxNOW",
      "Flowflex",
      "Quidel Quickvue",
      "Siemens CLINITEST",
      "Roche COVID-19 AT-Home Test",
      "Other",
    ]);
    table.date("test_date");
    table.tinyint("age", 3);
    table.tinyint("zipcode", 5);
    table.enu("symptoms", ["No", "Yes", "Not sure"]);
    table.enu("sex", ["Male", "Female", "Other"]);
    table.enu("race", [
      "Native Hawaiian or other Pacific Islander",
      "American Indian or Alaskan Native",
      "Black or African American",
      "Asian",
      "White",
      "Other",
    ]);
    table.enu("ethnicity", ["Hispanic or Latino", "Non-Hispanic or Latino"]);
    table.boolean("reminder");
    table.string("first_name");
    table.string("middle_initial");
    table.string("last_name");
    table.string("street_address");
    table.string("city");
    table.string("state");
    table.string("email").unique();
    table.string("phone_number");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
