import express, { Request, Response } from "express";

const jsonMessagesDb = require('../assets/jsonMessagesDb');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get("/", cartController.listCarts);

export default router;