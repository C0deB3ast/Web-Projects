import Product from "../models/productModel.js";

//Create Product-Admin
export const createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//Get All Products
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
};

//Get Single Product
export const getSingleProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  res.status(200).json({
    success: true,
    product,
  });
};

//Update Product

export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
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
};

//Delete Product
export const deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product Not Found",
    });
  }
  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted",
  });
};
