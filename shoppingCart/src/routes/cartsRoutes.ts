import express, { Request, Response } from "express";
import { Cart } from "../entities/Cart";
const jsonMessagesDb = require('../assets/jsonMessagesDb');

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await Cart.find({
      relations: {
        products: true,
      },
    }).then((carts) => {
      res.send(carts);
    })
  } catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
		throw error;
	}
})

export default router;