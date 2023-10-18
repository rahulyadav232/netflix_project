const mongoose = require("mongoose");

require("dotenv").config();

// const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.fhqi93b.mongodb.net/`;
const url = `mongodb+srv://rah_yadav50:nDcYggfO5WQz8uyx@cluster0.2sukaqn.mongodb.net/`;
// const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.2sukaqn.mongodb.net/`;
// const url = "mongodb://localhost:27017";

const dbName = "Netflix";

const connect = mongoose.connect(url + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connect;
