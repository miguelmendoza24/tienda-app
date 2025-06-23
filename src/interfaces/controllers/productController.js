import { registerProduct } from "../../use-case/product/registerProduct.js";
import { buyProduct } from "../../use-case/product/buyProduct.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await registerProduct({ name, price, stock });
    res.status(201).json({ message: 'product registered', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const handleBuyProduct = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const purchase = await buyProduct({ productId, userId, quantity });
    res.status(200).json({
      message: 'Purchase successful', purchase,
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};