import app from "./app.js";
import dotenv from "dotenv"

//Config
dotenv.config({path:"./Backend/config/config.env"});



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})