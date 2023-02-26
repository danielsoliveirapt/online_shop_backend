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
const validateToken = require("../middleware/auth");
const jwt = require("jsonwebtoken");
require('dotenv').config();
class ApiController {
    constructor() {
        this.getProducts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // #swagger.tags = ['Produtos']
            // #swagger.summary = 'Endpoint que retorna todos os produtos da loja'
            const url = 'http://localhost:4545/listProducts';
            axios.get(url)
                .then(function (response) {
                res.send(response.data);
            });
        });
        this.addProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // #swagger.tags = ['Carrinho de compras']
            // #swagger.summary = 'Endpoint que permite adicionar produtos a um carrinho de compras'
            const url = 'http://localhost:5555/products/';
            const data = req.body;
            axios.post(url, data)
                .then(function (response) {
                /* #swagger.responses[201] = {
                description: "Produto adicionado com sucesso." } */
                res.send(response.data);
            });
        });
        this.removeProduct = (req, res) => {
            // #swagger.tags = ['Carrinho de compras']
            // #swagger.summary = 'Endpoint para remover produtos de um carrinho de compras'
            const url = `http://localhost:5555/products/${req.params.id}`;
            axios.delete(url)
                .then(function (response) {
                /* #swagger.responses[200] = {
                description: "Produto eliminado com sucesso." } */
                res.send(response.data);
            });
        };
        this.getCarts = (req, res) => {
            // #swagger.tags = ['Carrinho de compras']
            // #swagger.summary = 'Endpoint que devolve os carinhos de compras da loja e os produtos que estão dentro dele'
            const url = 'http://localhost:5555/carts/';
            axios.get(url)
                .then(function (response) {
                res.send(response.data);
            });
        };
        this.auth = (req, res) => {
            // #swagger.tags = ['Carrinho de compras']
            // #swagger.summary = 'Endpoint que devolve o token se o utilizador autenticar com sucesso'
            if (req.body.password == process.env.PASSWORD) {
                const tokenData = { name: process.env.USERNAME, email: process.env.EMAIL, userid: process.env.USERID };
                const token = jwt.sign(tokenData, process.env.SECRETKEY, { expiresIn: '1d' });
                const response = [{
                        "msg": "success",
                        "message": "Login with success",
                        "success": true,
                        "status": 200,
                        token: token
                    }];
                res.status(200).send(response);
            }
            else {
                const response = [{
                        "msg": "invalid",
                        "message": "Invalid login",
                        "success": false,
                        "status": 400
                    }];
                res.status(200).send(response);
            }
        };
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/getProducts', validateToken, jsonParser, this.getProducts);
        this.router.post('/addProduct', validateToken, jsonParser, this.addProduct);
        this.router.delete('/removeProduct/:id', validateToken, jsonParser, this.removeProduct);
        this.router.get('/getCarts', validateToken, jsonParser, this.getCarts);
        this.router.get('/auth', jsonParser, this.auth);
    }
}
exports.ApiController = ApiController;
