"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonMessagesDb = require('../assets/jsonMessagesDb');
const productController = require('../controllers/productController');
const router = express_1.default.Router();
router.get("/", productController.listProducts);
router.post("/", productController.addProduct);
router.delete("/:id", productController.removeProduct);
exports.default = router;
