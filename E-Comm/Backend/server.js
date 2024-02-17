import app from "./app.js";

import dotenv from "dotenv";
import connectDB from "./config/database.js";

//Handle Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);

  process.exit(1);
})

// config

dotenv.config({path:"Backend/config/config.env"});



// Connect Database
connectDB();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server running on port http://localhost:${process.env.PORT}`);
})

//Unhandeled Promise REjection
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Server is shuting down due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});