const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const userRouter = require("./routes/userRouter");
const journalRouter = require("./routes/journalRouter");
const themeRouter = require("./routes/themeRouter");

const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.static(path.join(__dirname, "client/build")));
app.use("/user", userRouter);
app.use("/journal", journalRouter);
app.use("/theme", themeRouter);

mongoose.connect(
  DATABASE_URL,
  {useNewUrlParser: true, useUnifiedTopology: true}
).catch(error => console.error("MongoDB connection error:" + error.message));
  mongoose.connection.on("connected", () => console.log("connected to MongoDB"));

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});