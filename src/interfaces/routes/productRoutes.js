import { Router } from "express";
import { createProduct, deleteProduct, getListProducts, updateProduct, } from "../controllers/productController.js";
import { isAdmin } from "../middleware/isAdmin.js";
import isAuthenticated from "../middleware/isAuthenticated.js";


const router = Router();

router.get('/list', isAuthenticated, getListProducts);

router.post('/register', isAuthenticated, isAdmin, createProduct);

router.put('/update/:code', isAuthenticated, isAdmin, updateProduct);

router.delete('/delete/:code', isAuthenticated, isAdmin, deleteProduct);


export default router;