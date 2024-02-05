const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");
const { error } = require("console");

// configure dotenv
dotenv.config();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.get("/test", (req, res) => {
  res.status(200).send("<h1>WELCOME to Nodejs Mysql APP</h1>");
});

// port
const PORT = process.env.PORT || 8000;

// conditionally listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    // MY SQL
    console.log("MySQL DB connected".bgGreen.white);
    // listen
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`.bgMagenta.white);
    });
  })
  .catch((error) => {
    console.log(error);
  });
