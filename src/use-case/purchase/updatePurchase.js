import ProductModel from "../../infrastructure/db/models/productModel.js";
import PurchaseModel from "../../infrastructure/db/models/purchaseModel.js";

export const updatePurchase = async (id, updatedData) => {
  const existingPurchase = await PurchaseModel.findById(id);
  if (!existingPurchase) {
    throw new Error("Purchase not found");
  }

  const product = await ProductModel.findById(existingPurchase.productId);
  if (!product) {
    throw new Error("Associated product not found");
  }

  if (updatedData.quantity !== undefined) {
    const oldQty = existingPurchase.quantity;
    const newQty = updatedData.quantity;
    const diff = newQty - oldQty;

    if (product.stock < diff) {
      throw new Error("Not enough stock to increase purchase quantity");
    }

    product.stock -= diff;
    await product.save();
  }

  const updated = await PurchaseModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  if (!updated) {
    throw new Error("Purchase not found to update")
  }
  return updated;
}