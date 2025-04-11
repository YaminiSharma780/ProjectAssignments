import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const dbConnection = await mongoose.connect(process.env.DB_URL);
    console.log("mongodb is connected with server :", dbConnection.connection.host);
    console.log("process.env.DB_URL :", process.env.DB_URL)
  } catch (error) {
    console.log("error while connecting mongodb with server :", error.message);
    process.exit(1);
  }
};
