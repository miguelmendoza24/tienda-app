import ProductModel from "../../infrastructure/db/models/productModel.js";

export const deleteProduct = async (code) => {
  const deleted  = await ProductModel.findOneAndDelete({ code });
  if ( !deleted) {
    throw new Error("Product not found to delete");
  }
  return deleted;
};