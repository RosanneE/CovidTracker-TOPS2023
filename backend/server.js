const express = require("express");
const { Client } = require("pg");

// Create a new Express application
const app = express();

require("dotenv").config();

// Define the port the server will run on.
const port = process.env.PORT || 3030;

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

// ========================
// Route handlers
// ========================

// GET route to retrieve all the users
app.get("/", async (req, res) => {
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
      contact_name,
      org_name,
      email,
      site_origin,
      home_link,
      positive_test_link,
      negative_test_link,
      more_info_link,
    } = req.body;

    // Insert the new user into the database
    const query =
      "INSERT INTO users (contact_name, org_name, email, site_origin, home_link, positive_test_link, negative_test_link, more_info_link, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *";
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

// Start the server, listening on the specified port.
app.listen(port, () => console.log(`Server running on port ${port}`));
