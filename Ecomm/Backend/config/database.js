import mongoose from "mongoose";



const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL,
    ).then((data)=>{
        console.log(`DataBase is connected with server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
};


export default connectDatabase
