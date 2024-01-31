import express from "express";
import {router as product} from "./routes/productRoutes.js"
import { errorMiddleware } from "./middleware/error.js";
const app = express();

app.use(express.json())
//Routes import
//const product = require("./routes/productRoutes");


app.use("/api/v1", product);

// Middleware for error

app.use(errorMiddleware)


export default app