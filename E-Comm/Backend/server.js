import app from "./app.js";

import dotenv from "dotenv";
import connectDB from "./config/database.js";

// config

dotenv.config({path:"Backend/config/config.env"});

// Connect Database

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
})