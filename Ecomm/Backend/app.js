import express from "express"
import errorMiddleware from "./middleware/error.js"


const app = express()

app.use(express.json());

import product from "./routes/productRoute.js"

app.use("/api/v1",product);

//Middleware for error

app.use(errorMiddleware);


export default app