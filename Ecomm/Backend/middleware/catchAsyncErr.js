const catchAsyncErr = (Feunc)=>(req,res,next)=>{
    Promise.resolve(Feunc(req,res,next)).catch(next)
};

export default catchAsyncErr
