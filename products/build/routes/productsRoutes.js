"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const productsController = require('../controllers/productsController');
app.get("/listProducts", productsController.listProducts);
app.post("/addProduct", productsController.addProduct);
module.exports = app;
