const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_DB = process.env.MONGO_DB;
const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB);
    console.log("✅  DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("❌  DB Connection Failed: ", error.message);
    process.exit(1);
  }
};

module.exports = ConnectDB;
