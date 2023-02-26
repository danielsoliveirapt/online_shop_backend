import express, { Request, Response } from "express";
const jsonMessagesDb = require('../assets/jsonMessagesDb');
import { Cart } from "../entities/Cart";

module.exports = {
  listCarts: async (req: Request, res: Response) => {
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
  },
};