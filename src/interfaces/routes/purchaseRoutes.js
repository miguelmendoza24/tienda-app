import { Router } from "express"
import { isClient } from "../middleware/isClient.js";
import {isAdmin} from "../middleware/isAdmin.js"
import isAuthenticated from "../middleware/isAuthenticated.js";
import isOwner from "../middleware/isOwner.js";
import { createPurchase, deletePurchase, getClientPurchases, listPurchases, updatePurchase } from "../controllers/purchaseController.js";
   
const router = Router();

router.get("/list", isAuthenticated, isAdmin, listPurchases)

router.post("/create", isAuthenticated, isClient, createPurchase);

router.delete("/delete/:id", isAuthenticated, isAdmin, deletePurchase);

router.put("/update/:id", isAuthenticated, isAdmin, updatePurchase);

router.get('/client/:id', isAuthenticated, isClient, isOwner, getClientPurchases);

export default router;