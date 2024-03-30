import app from "./app.js";
import dotenv from "dotenv"
import connectDatabase from "./config/database.js";

//Config
dotenv.config({path:"./Backend/config/config.env"});

//Connnect to database
connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})