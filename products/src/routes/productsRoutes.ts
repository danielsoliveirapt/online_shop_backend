import express, { Request, Response } from "express";
const productModel = require("../models/product");
const app = express();
const jsonMessagesDb = require('../assets/jsonMessagesDb');

app.get("/listProducts", async (req: Request, res: Response) => {
  const products = await productModel.find({});
  try {
    res.send(products);
  } catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
    throw error;
  }
});

app.post("/addProduct", async (req: Request, res: Response) => {
  const product = new productModel(req.body);
  try {
    await product.save();
    res.status(jsonMessagesDb.db.successInsert.status).send(jsonMessagesDb.db.successInsert);
  } catch (error) {
    res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
    throw error;
  }
});

module.exports = app;
