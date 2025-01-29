const express = require("express");
const app = express();
const port = 8000;

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Root route for the home page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Welcome to the Customer Form</h1>
        <p><a href="/form">Go to Customer Form</a></p>
      </body>
    </html>
  `);
});

// Route to render the customer form
app.get("/form", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Customer Form</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
          }
          .form-container {
            width: 300px;
            margin: 0 auto;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
          label, input {
            width: 100%;
            margin: 8px 0;
            padding: 8px;
            box-sizing: border-box;
          }
          button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
          }
          button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="form-container">
          <h2>Enter Customer Details</h2>
          <form action="/submit" method="POST">
            <label for="customerid">Customer ID:</label>
            <input type="text" id="customerid" name="customerid" required />

            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="phoneno">Phone Number:</label>
            <input type="tel" id="phoneno" name="phoneno" pattern="^\d{10}$" required title="Phone number should be 10 digits" />

            <button type="submit">Submit</button>
          </form>
        </div>
      </body>
    </html>
  `);
});

// Route to handle form submission
app.post("/submit", (req, res) => {
  const { customerid, name, phoneno } = req.body;

  // Validate that all fields are provided
  if (!customerid || !name || !phoneno) {
    return res.status(400).send("All fields are required.");
  }

  // Validate the phone number format (already partially done via HTML pattern)
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneno)) {
    return res.status(400).send("Please enter a valid 10-digit phone number.");
  }

  // Log the submitted data to the console
  console.log(`Customer ID: ${customerid}`);
  console.log(`Name: ${name}`);
  console.log(`Phone Number: ${phoneno}`);

  // Return a success message to the client
  res.send(`
    <html>
      <body>
        <h2>Form Submitted Successfully!</h2>
        <p>Customer ID: ${customerid}</p>
        <p>Name: ${name}</p>
        <p>Phone Number: ${phoneno}</p>
        <a href="/form">Go back to form</a>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
