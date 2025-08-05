import PurchaseModel from '../../infrastructure/db/models/purchaseModel.js';


export const getUserPurchase = async (userId) => {
  const purchases = await PurchaseModel.find({ user: userId }).populate('product');
  return purchases;
};