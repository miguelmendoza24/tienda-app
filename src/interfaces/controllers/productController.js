import { registerProduct } from "../../use-case/product/registerProduct.js";
import { getProducts } from "../../use-case/product/getProduct.js";

export const createProduct = async (req, res) => {
  try {
    const { code, name, price, stock } = req.body;
    const product = await registerProduct({ code, name, price, stock });
    res.status(201).json({ message: 'product registered', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


  export const getListProducts = async (req, res) => {
    try {
      const products = await getProducts()
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};