import express, { Request, Response } from "express";
const jsonMessagesDb = require('../assets/jsonMessagesDb');
const productModel = require("../models/product");

module.exports = {
  listProducts: async (req: Request, res: Response) => {
    const products = await productModel.find({});
    try {
      res.send(products);
    } catch (error) {
      res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
      throw error;
    }
  },
  addProduct: async (req: Request, res: Response) => {
    const product = new productModel(req.body);
    try {
      await product.save();
      res.status(jsonMessagesDb.db.successInsert.status).send(jsonMessagesDb.db.successInsert);
    } catch (error) {
      res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
      throw error;
    }
  }
};