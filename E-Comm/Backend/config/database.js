import mongoose from "mongoose";
const connectDB =()=>{
    mongoose.connect(process.env.DATABASE).then((data)=>{
        console.log(`DAtAbase connected with server: ${data.connection.host}`);
       }).catch((errr)=>{
           console.log(errr);
       })
}

export default connectDB
