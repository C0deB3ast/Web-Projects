import { catchAsyncErrors } from "../middleware/cacthAsyncErrors.js";
import Product from "../models/productmodel.js";
import ErrorHandeler from "../utils/errorHandler.js";


//create product -admin

export const createProduct = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })

});


//get all products
export const getAllProducts = catchAsyncErrors(
    async (req,res)=>{

        const products = await Product.find();
    
        res.status(200).json({
            success:true,
            products
        })
    }
)

// get single product
export const getSingleProduct = catchAsyncErrors(
    async(req,res,next)=>{

        const product = await Product.findById(req.params.id);
    
        if(!product){
            return next(new ErrorHandeler("Product not found",404));
        }
    
        res.status(200).json({
            success:true,
            product
        })
    
    }
)

// Update product
export const updateProduct = catchAsyncErrors(
    async(req,res,next)=>{

        let product = await Product.findById(req.params.id)
    
        if(!product){
            return next (new ErrorHandeler("Product not found",404))
        }
    
        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        });
    
        res.status(200).json({
            success:true,
            product
        })
    }
)

// Delete Product
export const deleteProduct = catchAsyncErrors(
    async(req,res,next)=>{

        const product = await Product.findById(req.params.id)
    
        if(!product){
            return next(new ErrorHandeler("Product not found",404));
        }
    
        await product.deleteOne(); 
    
        res.status(200).json({
            success:true,
            message:"Product deleted successfully"
        })
    }
)