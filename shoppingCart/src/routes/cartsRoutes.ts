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
    //let productsCart: Array<any> = [];
    //let objBdRetorno = {...item, product}
    //let objBdRetorno = {};
    //let arrProducts: any[] = ['1', '2'];

    //await Cart.find().then((carts) => {
    //carts.Cart.push();
    //arrProducts.push(4, 5);
    //console.log(carts);
    //res.json(arrProducts);
    
    /*Object.keys(data).forEach((key) => {
      Product.findBy({ shoppingCartId: data[key].id }).then((product) => {
        res.json(product);
      })
    })*/
    /*carts.forEach((item) => {
      Product.findBy({ shoppingCartId: item.shoppingCartId }).then((product) => {
        let objBdRetorno = {...item, product}
        res.json(objBdRetorno);
      })
    });*/
    /*for (var i=0; i < carts.length; i++){
      Product.findBy({ shoppingCartId: carts[i].shoppingCartId }).then((product) => {
        productsCart.push(carts[i]);
        productsCart.push(product);
        res.json(productsCart);
      })
    }*/
	})
})

export default router;