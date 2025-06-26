import PurchaseModel from "../../infrastructure/db/models/purchaseModel.js";

export const getPurchases = async () => {
  const purchases = await PurchaseModel.find()
    .populate("productId", "name code price") 
    .populate("userId", "name email");
  return purchases;
};
