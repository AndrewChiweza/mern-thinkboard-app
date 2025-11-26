const express = require("express");
const cors = require("cors");
require("dotenv").config({ quiet: true });

const notesRoutes = require("./routes/notes.route.js");
const ConnectDB = require("./config/db.js");
const rateLimiter = require("./middleware/rateLimiter.js");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
//const __dirname = path.resolve();

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(rateLimiter);

//routes
app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../../frontend/think_board_app/dist");
  app.use(express.static(buildPath));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

//connect to the DB method
ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log("☑️   SERVER RUNNING ON PORT:", PORT);
  });
});
