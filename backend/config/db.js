const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }
    catch {
        console.error("Failed to connect to MongoDB");
    }
}

module.exports = connectDB;
