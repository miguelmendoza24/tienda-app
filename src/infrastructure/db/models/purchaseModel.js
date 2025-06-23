import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    defaul: Date.now,
  }
});

const PurchaseModel = mongoose.model('Purchase', purchaseSchema);
export default PurchaseModel;