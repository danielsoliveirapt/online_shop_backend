import express, { Request, Response } from "express";
import { Cart } from "../entities/Cart";
import { Product } from "../entities/Product";
import { createQueryBuilder } from "typeorm";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  await Cart.find({
    relations: {
      products: true,
    },
  }).then((carts) => {
    res.json(carts);
	})
})

export default router;