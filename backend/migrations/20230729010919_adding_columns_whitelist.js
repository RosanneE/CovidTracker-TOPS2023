/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .table("users", (table) => {
      table.string("logo");
      table.string("cover_photo");
      table.string("custom_message");
      table.string("social_sharing_message");
      table.string("color_theme");
    })
    .catch((err) => console.error(err));
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.table("users", (table) => {
        table.dropColumn("logo");
        table.dropColumn("cover_photo");
        table.dropColumn("custom_message");
        table.dropColumn("social_sharing_message");
        table.dropColumn("color_theme");
    })
};
