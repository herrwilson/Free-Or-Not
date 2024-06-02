const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./utils/config");

const authRouter = require("./routes/auth");
const roomRouter = require("./routes/room");
const weeklyRouter = require("./routes/weekly");

const PORT = config.PORT || 3001;

// Only for development
app.use(cors());

app.use(express.json());

// Database connection
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

// Routes
app.use("/api/auth", authRouter);
app.use("/api/room", roomRouter);
app.use("/api/weekly", weeklyRouter);

app.use(express.static(__dirname + "/build"));

// Start server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
