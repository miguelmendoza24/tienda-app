import { createPurchase as registerPurchase } from "../../use-case/purchase/createPurchase.js";
import {deletePurchase as removePurchase } from '../../use-case/purchase/deletePurchase.js'
import { updatePurchase as editPurchase } from '../../use-case/purchase/updatePurchase.js'
import { getPurchases } from "../../use-case/purchase/getPurchase.js";


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


export const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    await removePurchase(id);
    res.status(200).json({ message: "Purchase deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const updatePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedPurchase = await editPurchase(id, updatedData);
    res.status(200).json({
      message: "Purchase update",
      purchase: updatedPurchase
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const listPurchases = async (req, res) => {
  try {
    const purchases = await getPurchases();
    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};