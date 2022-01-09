const mongoose = require("mongoose");

export const DatabaseInit = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connection Mongo: OK.");
  } catch (err) {
    throw new Error("Unable to connect to the database: " + err);
  }
};
