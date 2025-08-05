import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  code: {type: String, required: true, unique: true},
  name: { type: String, require: true },
  category: { type: String, default: "abarrotes" },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;