import express  from "express";
import { getAllProducts,createProduct, updateProduct, deleteProduct, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

//Create Product
router.route("/product/new").post(createProduct);

//Get All Products
router.route("/products").get(getAllProducts);

//Update Product
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct);


export default router