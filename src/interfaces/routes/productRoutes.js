import { Router } from "express";
import { createProduct, getListProducts, } from "../controllers/productController.js";
import { isAdmin } from "../middleware/isAdmin.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = Router();

router.get('/list', isAuthenticated, getListProducts);

router.post('/register', isAuthenticated, isAdmin, createProduct);



export default router;