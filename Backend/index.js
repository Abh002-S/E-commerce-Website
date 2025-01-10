import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./Route/book.route.js";
import cors from "cors";
import userRoute from "./Route/User.route.js";
import path from "path";

const app = express();

const _dirname = path.resolve();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const uri = process.env.MongoDbURL;

// Debugging: Check the URI value
console.log("MongoDbURL:", uri);

// Connect to MongoDB
if (!uri) {
  console.error("Error: MongoDbURL is not defined.");
  process.exit(1);
}

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

// Defining Routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

app.use(express.static(path.join(_dirname, "/Frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirname, "Frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
