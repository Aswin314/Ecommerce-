import mongoose, { mongo } from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoURI);
    console.log("successfully connected ");
    
  } catch (error) {
    console.error(`ERROR ${error.message}`);
    process.exit(1);
  }
};
export default ConnectDB