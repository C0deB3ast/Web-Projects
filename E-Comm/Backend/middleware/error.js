import ErrorHandeler from "../utils/errorHandler.js";

export const errorMiddleware = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    //Wrong Mongodb Id error
    if(err.name === "CastError"){
        const messsage = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandeler(messsage,400)
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}

// The errorMiddleware function appears to be a middleware function used in an Express.js application to handle errors. When an error occurs in the application, this middleware is called with the error, request, response, and next function as parameters.

// Within this middleware function, it sets the statusCode and message properties of the error if they are not already defined. Then, it sends a JSON response with the corresponding status code and error message.

// This middleware function is useful for centralizing error handling logic in the application. It allows you to customize how errors are handled and formatted in a consistent manner across different parts of the application.

// By importing the ErrorHandler class from "../utils/errorHandler.js", you can potentially use it to create custom error instances within this middleware for more detailed error handling.