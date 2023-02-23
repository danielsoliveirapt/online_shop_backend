const express = require("express");
const productModel = require("../models/product");
const app = express();

app.get("/listProducts", async (request, response) => {
  const products = await productModel.find({});
  try {
    response.send(products);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/addProduct", async (request, response) => {
    const product = new productModel(request.body);
    try {
      await product.save();
      response.send(product);
    } catch (error) {
      response.status(500).send(error);
    }
});

module.exports = app;
