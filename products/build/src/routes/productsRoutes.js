"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productModel = require("../models/product");
const app = (0, express_1.default)();
const jsonMessagesDb = require('../assets/jsonMessagesDb');
app.get("/listProducts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield productModel.find({});
    try {
        res.send(products);
    }
    catch (error) {
        res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
        throw error;
    }
}));
app.post("/addProduct", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new productModel(req.body);
    try {
        yield product.save();
        res.status(jsonMessagesDb.db.successInsert.status).send(jsonMessagesDb.db.successInsert);
    }
    catch (error) {
        res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
        throw error;
    }
}));
module.exports = app;
