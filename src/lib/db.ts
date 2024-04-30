import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDatabase;
