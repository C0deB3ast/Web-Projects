export const catchAsyncErrors = (Func) => (req,res,next)=>{
       
    Promise.resolve(Func(req,res,next)).catch(next)
}

// The catchAsyncErrors function is a higher-order function that takes another function Func as a parameter. It returns a new function that takes req, res, and next as parameters, which is typical for an Express.js middleware function.

// This function is designed to catch asynchronous errors that may occur within the Func function. It does this by wrapping the execution of Func in a Promise.resolve call, which ensures that the return value of Func is always a promise. If the promise is rejected (i.e., an error occurs), the catch method is used to pass the error to the next function, which triggers the error-handling middleware.

// The purpose of this code is to simplify error handling for asynchronous functions in an Express.js application. It allows you to write asynchronous route handlers without needing to explicitly handle the promise rejections, as the catchAsyncErrors function takes care of that for you