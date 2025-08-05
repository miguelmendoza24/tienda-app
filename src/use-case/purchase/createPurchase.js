import ProductModel from '../../infrastructure/db/models/productModel.js';
import Purchase from '../../domain/entities/purchase.js';
import PurchaseModel from '../../infrastructure/db/models/purchaseModel.js'
import mongoose from 'mongoose';

export const createPurchase = async ({ code, user, quantity }) => {
  const session = await mongoose.startSession();
  session.startTransaction();


  try {
    const product = await ProductModel.findOne({ code }).session(session);
    if (!product) {
      throw new Error('Product not found')
    }
    if (product.stock < quantity) {
      throw new Error('Insufficient stock')
    }
    
    product.stock -= quantity;
    await product.save({ session });
    
    const purchaseEntity = new Purchase({
      product: product._id,
      user,
      quantity,
    });
    const purchase = new PurchaseModel(purchaseEntity);
    await purchase.save({ session });

    await session.commitTransaction();
    session.endSession();

    return purchase;
    
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};