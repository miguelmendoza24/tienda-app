import ProductModel from '../../infrastructure/db/models/productModel.js';
import PurchaseModel from '../../infrastructure/db/models/purchaseModel.js'

export const deletePurchase = async (id) => {
  const purchase = await PurchaseModel.findById(id);
  if (!purchase) {
    throw new Error("Purchase not found");
  }
  const product = await ProductModel.findById(purchase.productId);
  if (!product) {
    throw new Error("Associated product not found");
  }

  product.stock += purchase.quantity;
  await product.save()

  await PurchaseModel.findByIdAndDelete(id);
};