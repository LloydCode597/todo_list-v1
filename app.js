// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000; // You can choose any available port number

let items = ["Buy Food", "Cook Food", "Eat Food"];

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
