import { createPurchase as registerPurchase } from "../../use-case/purchase/createPurchase.js";

export const createPurchase = async (req, res) => {
  try {
    const { code, quantity } = req.body;
    const userId = req.user.id;

    const purchase = await registerPurchase({ code, userId, quantity });
    res.status(200).json({
      message: "Purchase successful",
      purchase,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
