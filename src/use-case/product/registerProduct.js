import Product from "../../domain/entities/product.js";
import ProductModel from "../../infrastructure/db/models/productModel.js";

export const registerProduct = async (productData) => {
  const existinProduct = await ProductModel.findOne({ code: productData.code });

  if (existinProduct) {
    throw new Error("el producto ya existe con ese codigo.")
  }

  const product = new Product(productData);
  const newProduct = new ProductModel(product)
  await newProduct.save();

  return newProduct;
};