
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is missing in .env file');
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_URI,
      {
        serverSelectionTimeoutMS: 10000
      }
    );

    console.log(
      `✅ MongoDB Connected: ${conn.connection.host}`
    );

  } catch (error) {
    console.error(
      `❌ MongoDB Connection Error: ${error.message}`
    );

    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB Disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('✅ MongoDB Reconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ MongoDB Error: ${err.message}`);
});

module.exports = connectDB;
