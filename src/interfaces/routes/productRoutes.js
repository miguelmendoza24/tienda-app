import { Router } from "express";
import { createProduct, handleBuyProduct} from "../controllers/productController.js";
import { isAdmin } from "../middleware/isAdmin.js";
import passport from "passport";
import {isClient} from '../middleware/isClient.js'

const router = Router();

router.post('/register', passport.authenticate('jwt', { session: false }), isAdmin, createProduct);
router.post('/buy', passport.authenticate('jwt',{session:false}), isClient, handleBuyProduct)

export default router;