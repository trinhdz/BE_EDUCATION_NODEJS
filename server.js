const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/connectdb");
const cors = require("cors");
const ViolatesRoute = require("./routes/userRouter");

const app = express();
app.use(
  cors({
    origin: process.env.IP_CLIENT,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(ViolatesRoute);
app.listen(3000, () => {
  console.log("listening port 3000");
});
connectDB();
