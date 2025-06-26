import ProductModel from "../../infrastructure/db/models/productModel.js";

export const updateProduct = async (code, updatedData) => {
  const product = await ProductModel.findOneAndUpdate({ code }, updatedData, {
    new: true,
  });
  if (!product) {
    throw new Error("Product not found to update");
  }
  return product;
};
