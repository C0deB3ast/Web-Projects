import Product from "../models/productModel.js";
import Errorhandeler from "../utils/errorHandle.js";
import catchAsyncErr from "../middleware/catchAsyncErr.js";
//Create Product-Admin
export const createProduct = catchAsyncErr(
  async (req, res, next) => {
    const product = await Product.create(req.body);
  
    res.status(201).json({
      success: true,
      product,
    });
  }
);

//Get All Products
export const getAllProducts = catchAsyncErr(
  async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
}
)

//Get Single Product
export const getSingleProduct = catchAsyncErr(
  async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return next(new Errorhandeler("Product Not Found", 404));
    }
    res.status(200).json({
      success: true,
      product,
    });
  }
)

//Update Product

export const updateProduct = catchAsyncErr(
  async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new Errorhandeler("Product Not Found", 404));
  
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  }
  
)
//Delete Product
export const deleteProduct = catchAsyncErr(
  async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new Errorhandeler("Product Not Found", 404));
  
    }
    await product.deleteOne();
  
    res.status(200).json({
      success: true,
      message: "Product Deleted",
    });
  }
)
