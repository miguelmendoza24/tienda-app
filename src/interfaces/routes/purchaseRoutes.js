import { Router } from "express"
import { isClient } from "../middleware/isClient.js";
import { createPurchase } from "../controllers/purchaseController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
   
const router = Router();
router.post("/create", isAuthenticated, isClient, createPurchase);
 
export default router;