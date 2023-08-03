/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("partners", function (table) {
      table.increments("id").primary();
      table.string("org_name");
      table.string("contact_name")
      table.string("email").unique();
      table.string("site_origin");
      table.string("home_link");
      table.string("positive_test_link");
      table.string("negative_test_link");
      table.string("more_info_link");
      table.timestamps(true);
      // Add other columns as needed
    })
    .catch((err) => console.error(err));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("partners");
};
