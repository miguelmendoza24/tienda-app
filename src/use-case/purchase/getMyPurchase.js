import PurchaseModel from '../../infrastructure/db/models/purchaseModel.js';


export const getPurchaseByUser = async (user) => {
  const purchases = await PurchaseModel.find({ user }).populate('product', 'name price');
  return purchases;
}