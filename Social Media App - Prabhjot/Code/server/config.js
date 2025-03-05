import mongoose from "mongoose";

// MongoDB Connection String
const uri = "mongodb+srv://prabhjotsingh9737:prabhjot07@cluster0.pwsap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Mongoose Connected Successfully!");
  } catch (error) {
    console.error("❌ Mongoose Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;