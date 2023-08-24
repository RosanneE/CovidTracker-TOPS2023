const express = require("express");
const { Client } = require("pg");
const path = require("path")

//process.env.NODE_ENV => for heroku production or undefined


// Create a new Express application
const app = express();

// Allow cross-origin requests (frontend)
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());

require("dotenv").config();

// Define the port the client server will run on.
const port = process.env.USERPORT || 3030;

// Create a new PostgreSQL client
const client = new Client({
  user: process.env.RDSUSER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// Connect to the PostgreSQL database
client
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
  });

// ========================
// Middleware
// ========================

// Add middleware to parse the POST data of the body
app.use(express.json());

app.use(express.static(path.join(__dirname, "frontend/build")));

// if (process.env.NODE_ENV == "production") {
//   // serve static content
//   //npm run build
// }


// ========================
// Route handlers
// ========================

// GET route to retrieve all the partners
app.get("/partners", async (req, res) => {
  try {
    // Retrieve the partners from the database
    const query = "SELECT * FROM partners";
    const result = await client.query(query);
    const partners = result.rows;
    res.json(partners);
  } catch (err) {
    console.error("Error retrieving partners!", err);
    res.status(500).json({ message: "Error retrieving partners!" });
  }
});

// POST route to create a new partners
app.post("/partners", async (req, res) => {
  try {
    const {
      contact_name,
      org_name,
      email,
      site_origin,
      home_link,
      positive_test_link,
      negative_test_link,
      more_info_link,
      logo,
      cover_photo,
      custom_message,
      social_sharing_message,
      color_theme,
    } = req.body;

    // Insert the new user into the database
    const query =
      "INSERT INTO partners (contact_name, org_name, email, site_origin, home_link, positive_test_link, negative_test_link, more_info_link, created_at, updated_at, logo, cover_photo, custom_message, social_sharing_message, color_theme) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *";
    const values = [
      contact_name,
      org_name,
      email,
      site_origin,
      home_link,
      positive_test_link,
      negative_test_link,
      more_info_link,
      new Date(),
      new Date(),
      logo,
      cover_photo,
      custom_message,
      social_sharing_message,
      color_theme,
    ];
    const result = await client.query(query, values);
    const newUser = result.rows[0];

    // Send the newly created user back as JSON
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating new user!", err);
    res.status(500).json({ message: "Error creating new user!" });
  }
});

// GET route to retrieve all the users
app.get("/users", async (req, res) => {
  try {
    // Retrieve the users from the database
    const query = "SELECT * FROM users";
    const result = await client.query(query);
    const users = result.rows;
    res.json(users);
  } catch (err) {
    console.error("Error retrieving users!", err);
    res.status(500).json({ message: "Error retrieving users!" });
  }
});

// POST route to create a new user
app.post("/users", async (req, res) => {
  try {
    const {
      test_result,
      test_taken,
      test_date,
      age,
      zipcode,
      symptoms,
      sex,
      race,
      ethnicity,
      reminder,
      first_name,
      middle_initial,
      last_name,
      street_address,
      city,
      state,
      email,
      phone_number,
    } = req.body;

    const query =
      "INSERT INTO users (test_result, test_taken, test_date, age, zipcode, symptoms, sex, race, ethnicity, reminder, first_name, middle_initial, last_name, street_address, city, state, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *";
    const values = [
      test_result,
      test_taken,
      test_date,
      age,
      zipcode,
      symptoms,
      sex,
      race,
      ethnicity,
      reminder,
      first_name,
      middle_initial,
      last_name,
      street_address,
      city,
      state,
      email,
      phone_number,
    ];
    const result = await client.query(query, values);
    const newUser = result.rows[0];

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating new user!", err);
    res.status(500).json({ message: "Error creating new user!" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"))
});


// Start the server, listening on the specified port.
app.listen(port, () => console.log(`Server running on port ${port}`));


  