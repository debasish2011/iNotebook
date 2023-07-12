const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const url = process.env.MONGO_URI || "mongodb://localhost:27017/inotebook";

const connectMongo = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connection successful");
    })
    .catch((err) => {
      console.log("MongoDB connection failed");
      console.log(err);
    });
};

module.exports = connectMongo;
