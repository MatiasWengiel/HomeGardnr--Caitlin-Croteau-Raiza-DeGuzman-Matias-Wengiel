require("dotenv").config();

//Setup server and require middleware
const PORT = 8080 //Development port
const express = require("express");
const app = express();
// const sassMiddleware = require("./lib/sass-middleware");
const morgan = require("morgan");

//Add cookieSession if planning on user Auth

//Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
// app.use(
//   "/styles",
//   sassMiddleware({
//     source: __dirname + "/styles",
//     destination: __dirname + "/public/styles",
//     isSass: false, // false => scss, true => sass
//   })
// );

app.use(express.static("public"))

// PG database client/connection setup UNCOMMENT ONCE DB MIGRATIONS ARE READY
// const { Pool } = require("pg");
// const dbParams = require("./lib/db.js");
// const db = new Pool(dbParams);
// db.connect();
const db = "Temporary-delete"


//Set up router and routes
const usersRoutes = require("./routes/users");
const plantsRoutes = require("./routes/plants");
const userPlantRoutes = require("./routes/user_plants");
const locationWeather = require("./routes/location_weather");

app.use("/api/users", usersRoutes(db));
app.use("/api/plants", plantsRoutes(db));
app.use("/api/user_plants", userPlantRoutes(db));
app.use("/api/location", locationWeather(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
