import ProductModel from "../../infrastructure/db/models/productModel.js"

export const getProducts = async () => {
  const products = await ProductModel.find();
  return products;
}