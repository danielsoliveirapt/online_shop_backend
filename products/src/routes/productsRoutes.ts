import express, { Request, Response } from "express";
const app = express();
const productsController = require('../controllers/productsController');

app.get("/listProducts", productsController.listProducts);

app.post("/addProduct", productsController.addProduct);

module.exports = app;
