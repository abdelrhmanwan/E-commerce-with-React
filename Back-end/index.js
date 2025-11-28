// Export Default
const express = require("express");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRouter");
const { connectToMongoDB } = require("./config/dbConfig");

const app = express();

// Global Middleware
app.use(express.json()); // body undefined

// Routes
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);

// Route => URL + Method GET POST PATCH PUT DELETE
// PARAMS /USERS/:ID => /USERS/2
// BODY POST PUT PATCH
// QUERY /USERS?SEARCH_TERM=APPLE&MIN_PRICE=10&MAX_PRICE=40

// First Connection
connectToMongoDB();

app.listen(8080, () => {
  console.log("SERVER RUNNING @PORT 8080");
});
