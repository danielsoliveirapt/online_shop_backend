"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonMessagesDb = require('../assets/jsonMessagesDb');
const cartController = require('../controllers/cartController');
const router = express_1.default.Router();
router.get("/", cartController.listCarts);
exports.default = router;
