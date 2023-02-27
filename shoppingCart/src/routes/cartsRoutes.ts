import express, { Request, Response } from "express";

const jsonMessagesDb = require('../assets/jsonMessagesDb');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get("/", cartController.listCarts);
router.post("/", cartController.addCart);

export default router;