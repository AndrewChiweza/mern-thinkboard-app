const express = require("express");
const cors = require("cors");
require("dotenv").config({ quiet: true });

const notesRoutes = require("./routes/notes.route.js");
const ConnectDB = require("./config/db.js");
const rateLimiter = require("./middleware/rateLimiter.js");

const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(rateLimiter);

//routes
app.use("/api/notes", notesRoutes);

//connect to the DB method
ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log("☑️   SERVER RUNNING ON PORT:", PORT);
  });
});
