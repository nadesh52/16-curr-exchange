const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

// app
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//route
const routesFolder = "./routes/";

fs.readdir(routesFolder, (err, files) => {
  files.forEach((file) => {
    app.use("/api", require("./routes/" + file));
  });
});

// interval
const getAll = require("./post/getAll");

// getAll();
// setInterval(getAll, 300000);

const PORT = 8000;
app.listen(PORT, () => console.log("app running on port " + PORT));

module.exports = app;
