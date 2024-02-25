import express from "express";
import { router as product } from "./routes/productRoutes.js";
import { router as user } from "./routes/userRoutes.js";
import { errorMiddleware } from "./middleware/error.js";
const app = express();

app.use(express.json());
//const product = require("./routes/productRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for error

app.use(errorMiddleware);

export default app;
