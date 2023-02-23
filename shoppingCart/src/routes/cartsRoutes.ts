import express, { Request, Response } from "express";
import { Cart } from "../entities/Cart";
import { Product } from "../entities/Product";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  var productsCart: Array<any> = [];
	await Cart.find().then((carts) => {
    res.json(carts);
    /*Object.keys(data).forEach((key) => {
      Product.findBy({ shoppingCartId: data[key].id }).then((product) => {
        res.json(product);
      })
    })
    productsCart = carts;
    carts.forEach((item) => {
      Product.findBy({ shoppingCartId: item.shoppingCartId }).then((product) => {
        productsCart.push(product);
        res.json(productsCart);
      })
    });
    for (var i=0; i < carts.length; i++){
      Product.findBy({ shoppingCartId: carts[i].shoppingCartId }).then((product) => {
        productsCart.push(carts[i]);
        productsCart.push(product);
        res.json(productsCart);
      })
    }*/
	})
})

export default router;