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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiController = void 0;
const express_1 = require("express");
const axios = require('axios');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
class ApiController {
    constructor() {
        this.getProducts = (req, res) => {
            const url = 'http://localhost:4545/listProducts';
            axios.get(url)
                .then(function (response) {
                try {
                    res.status(200).send(response.data);
                }
                catch (error) {
                    res.status(500).send(error);
                }
            });
        };
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const url = 'http://localhost:5555/products/';
            const data = req.body;
            axios.post(url, data)
                .then(function (response) {
                try {
                    res.status(200).send('Product added with successfuly.');
                }
                catch (error) {
                    res.status(500).send(error);
                }
            })
                .catch(function (error) {
                res.status(500).send(error);
            });
        });
        this.removeProduct = (req, res) => {
            const url = 'http://localhost:5555/products/';
            axios.delete(url)
                .then(function (response) {
                try {
                    res.status(200).send('Product deleted with successfuly.');
                }
                catch (error) {
                    res.status(500).send(error);
                }
            });
        };
        this.getCarts = (req, res) => {
            const url = 'http://localhost:5555/carts/';
            axios.get(url)
                .then(function (response) {
                try {
                    res.status(200).send(response.data);
                }
                catch (error) {
                    res.status(500).send(error);
                }
            });
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/getProducts', this.getProducts);
        this.router.post('/addProduct', jsonParser, this.addProduct);
        this.router.delete('/removeProduct/:id', this.removeProduct);
        this.router.get('/getCarts', this.getCarts);
    }
}
exports.ApiController = ApiController;
