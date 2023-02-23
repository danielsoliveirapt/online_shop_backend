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
const Cart_1 = require("../entities/Cart");
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var productsCart = [];
    yield Cart_1.Cart.find().then((carts) => {
        res.json(carts);
        /*Object.keys(data).forEach((key) => {
          Product.findBy({ shoppingCartId: data[key].id }).then((product) => {
            res.json(product);
          })
        })
        productsCart = carts;
        carts.forEach((item) => {
          Product.findBy({ shoppingCartId: item.shoppingCartId }).then((product) => {
            productsCart.push(product);
            res.json(productsCart);
          })
        });
        for (var i=0; i < carts.length; i++){
          Product.findBy({ shoppingCartId: carts[i].shoppingCartId }).then((product) => {
            productsCart.push(carts[i]);
            productsCart.push(product);
            res.json(productsCart);
          })
        }*/
    });
}));
exports.default = router;
