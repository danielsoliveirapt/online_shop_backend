import express, { Request, Response } from "express";
import { Product } from "../entities/Product";
import { Cart } from "../entities/Cart";
const jsonMessagesDb = require('../assets/jsonMessagesDb');
const productController = require('../controllers/productController');

const router = express.Router();

router.get("/", productController.listProducts);
router.post("/", productController.addProduct);
router.delete("/:id", productController.removeProduct);

export default router;