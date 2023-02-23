import express, { Request, Response } from "express";
const productModel = require("../models/product");
const app = express();

app.get("/listProducts", async (req: Request, res: Response) => {
  const products = await productModel.find({});
  try {
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/addProduct", async (req: Request, res: Response) => {
    const product = new productModel(req.body);
    try {
      await product.save();
      res.send(product);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = app;
