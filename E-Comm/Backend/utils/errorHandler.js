class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode

        Error.captureStackTrace(this,this.constructor)
    }
}

export default ErrorHandler;

// The ErrorHandler class is used for creating custom error objects with a specific message and statusCode. By extending the built-in Error class, it allows you to create custom error instances with additional properties and behaviors.

// For example, in your codebase, you can use the ErrorHandler class to create custom error objects for different scenarios within your application. This allows you to have more control over the error handling process and provide more detailed information when errors occur.

// When this class is exported as the default module, it can be imported and used in other parts of your codebase to create and handle custom error instances.