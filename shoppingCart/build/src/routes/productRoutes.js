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
const Product_1 = require("../entities/Product");
const Cart_1 = require("../entities/Cart");
const jsonMessagesDb = require('../assets/jsonMessagesDb');
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_1.Product.find().then((data) => {
            res.send(data);
        });
    }
    catch (error) {
        res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
        throw error;
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Product_1.Product.insert(req.body);
        //atualiza os campos totalPrice e totalQuantity do carrinho de compras
        const totals = yield Product_1.Product
            .createQueryBuilder("products")
            .select("SUM(quantity)", "quantity")
            .addSelect('SUM(price)', 'price')
            .where("cartShoppingCartId = :id", { id: req.body.cartShoppingCartId })
            .getRawOne();
        yield Product_1.Product
            .createQueryBuilder("products")
            .update(Cart_1.Cart)
            .set({
            totalQuantity: totals.quantity,
            totalPrice: totals.price,
        })
            .where("shoppingCartId = :id", { id: req.body.cartShoppingCartId })
            .execute();
        res.status(jsonMessagesDb.db.successInsert.status).send(jsonMessagesDb.db.successInsert);
    }
    catch (error) {
        res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
        throw error;
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryProduct = yield Product_1.Product
            .createQueryBuilder("products")
            .select("cartShoppingCartId", "cartShoppingCartId")
            .where("id=:id", { id: req.params.id })
            .getRawOne();
        if (!queryProduct) {
            res.status(200).send(jsonMessagesDb.db.noRecords);
        }
        else {
            yield Product_1.Product.delete(req.params.id);
            //atualiza os campos totalPrice e totalQuantity do carrinho de compras
            const totals = yield Product_1.Product
                .createQueryBuilder("products")
                .select("SUM(quantity)", "quantity")
                .addSelect('SUM(price)', 'price')
                .where("cartShoppingCartId = :id", { id: queryProduct.cartShoppingCartId })
                .getRawOne();
            yield Product_1.Product
                .createQueryBuilder("products")
                .update(Cart_1.Cart)
                .set({
                totalQuantity: totals.quantity,
                totalPrice: totals.price,
            })
                .where("shoppingCartId = :id", { id: queryProduct.cartShoppingCartId })
                .execute();
            res.status(jsonMessagesDb.db.successDelete.status).send(jsonMessagesDb.db.successDelete);
        }
    }
    catch (error) {
        res.status(jsonMessagesDb.db.dbError.status).send(jsonMessagesDb.db.dbError);
        throw error;
    }
}));
exports.default = router;
