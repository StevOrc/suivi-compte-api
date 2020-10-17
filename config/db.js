const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("connected to mongo db");
  } catch (error) {
    console.log("error connected to mongo db", error);
    process.exit(1);
  }
};

module.exports = connectDB;
