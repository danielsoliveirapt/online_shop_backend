import express, { Request, Response } from "express";
import { Product } from "../entities/Product";
import { Cart } from "../entities/Cart";
const jsonMessagesDb = require('../assets/jsonMessagesDb');

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await Product.find().then((data) => {
      res.send(data);
    })
  } catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
		throw error;
	}
})

router.post("/", async (req: Request, res: Response) => {
	try {
		await Product.insert(req.body);
    
    //atualiza os campos totalPrice e totalQuantity do carrinho de compras
    const totals = await Product
      .createQueryBuilder("products")
      .select("SUM(quantity)", "quantity")
      .addSelect('SUM(price)','price')
      .where("cartShoppingCartId = :id", { id: req.body.cartShoppingCartId })
      .getRawOne(); 

    await Product
      .createQueryBuilder("products")
      .update(Cart)
      .set({
        totalQuantity: totals.quantity,
        totalPrice: totals.price,
      })
      .where("shoppingCartId = :id", { id: req.body.cartShoppingCartId })
      .execute()

    res.status(jsonMessagesDb.db.successInsert.status).send(jsonMessagesDb.db.successInsert);
	} catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
		throw error;
	}
})

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const queryProduct = await Product
      .createQueryBuilder("products")
      .select("cartShoppingCartId", "cartShoppingCartId")
      .where("id=:id", { id: req.params.id })
      .getRawOne();
    
    if(!queryProduct){
      res.status(200).send(jsonMessagesDb.db.noRecords);
    }else{
      await Product.delete(req.params.id);
      //atualiza os campos totalPrice e totalQuantity do carrinho de compras
      const totals = await Product
        .createQueryBuilder("products")
        .select("SUM(quantity)", "quantity")
        .addSelect('SUM(price)','price')
        .where("cartShoppingCartId = :id", { id: queryProduct.cartShoppingCartId })
        .getRawOne();
      
      await Product
        .createQueryBuilder("products")
        .update(Cart)
        .set({
          totalQuantity: totals.quantity,
          totalPrice: totals.price,
        })
        .where("shoppingCartId = :id", { id: queryProduct.cartShoppingCartId })
        .execute()
      
      res.status(jsonMessagesDb.db.successDelete.status).send(jsonMessagesDb.db.successDelete);
    }
  } catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
    throw error;
  }
})

export default router;