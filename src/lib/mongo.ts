import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;
let isConnected = false;

const connectMongoDB = async () => {
  if (isConnected) {
    console.log('Already connected to MongoDB.');
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    isConnected = true;
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

export default connectMongoDB;
