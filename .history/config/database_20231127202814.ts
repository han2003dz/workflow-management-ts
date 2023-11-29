import mongoose from "mongoose";

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.TZ.);
    console.log("Connect Success!");
  } catch (error) {
    console.log("Connect Error!");
  }
};
