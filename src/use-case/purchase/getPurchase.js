import PurchaseModel from "../../infrastructure/db/models/purchaseModel.js";

export const getPurchases = async () => {
  const purchases = await PurchaseModel.find()
    .populate("product", "name code price") 
    .populate("user", "name email");
  return purchases;
};
