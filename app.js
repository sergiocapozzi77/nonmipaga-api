const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var expressJWT = require("express-jwt");
const config = require("./app/config/config.js");
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressJWT({ secret: config.SECRET, algorithms: ["HS256"] }).unless({path: ['/api/token/sign']}));

// simple route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to sergio application." });
});

require("./app/routes/furbetto.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
