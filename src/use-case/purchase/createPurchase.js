import ProductModel from '../../infrastructure/db/models/productModel.js';
import Purchase from '../../domain/entities/purchase.js';
import PurchaseModel from '../../infrastructure/db/models/purchaseModel.js'

export const createPurchase = async ({ code, userId, quantity }) => {
  const product = await ProductModel.findOne({ code });
  if (!product) {
    throw new Error('Product not found')
  }
  if (product.stock < quantity) {
    throw new Error('Insufficient estock')
  }

  product.stock -= quantity;
  await product.save();

  const purchaseEntity = new Purchase({
    productId: product._id,
    userId,
    quantity,
  });
  const purchase = new PurchaseModel(purchaseEntity);
  await purchase.save()
  return purchase;
}