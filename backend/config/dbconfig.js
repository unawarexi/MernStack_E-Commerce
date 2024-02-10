const mongoose = require('mongoose');

const connectDB = async () => {
    return await mongoose
      .connect(process.env.MONGO_URL, {})
      .then(() => {
        console.log("MongoDB connected successfully");
        
      })
      .catch((error) => {
        console.error(`MongoDB connection error: ${error}`);
        // Handle the error appropriately (e.g., exit the application)
        process.exit(1);
      });
  };
  
  
  module.exports = connectDB;