// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3003; // You can choose any available port number

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDay(); // Get the day of the week (0 is Sunday, 1 is Monday, and so on)
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to: " + currentDay);
  }

  res.render("list", { kindOfDay: day });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
