import mongoose from "mongoose";
const connectDB =()=>{
    mongoose.connect(process.env.DATABASE).then((data)=>{
        console.log(`DAtAbase connected with server: ${data.connection.host}`);
       })
}

export default connectDB

//What is Mongoose?
//Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward, schema-based solution for modeling application data and includes features such as validation, casting, and business logic hooks.