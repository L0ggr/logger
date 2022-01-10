require("dotenv");
const mongoose = require("mongoose");

export const DatabaseInit = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Mongo: OK.");
  } catch (err) {
    throw new Error("Unable to connect to the database: " + err);
  }
};
