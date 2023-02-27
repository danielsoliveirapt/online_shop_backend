import express, { Request, Response } from "express";
const router = express.Router();
const apiController = require('../controller/api.controller');
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const validateToken = require("../middleware/auth");

router.get("/getProducts", validateToken, jsonParser, apiController.getProducts);
router.post("/addProduct", validateToken, jsonParser, apiController.addProduct);
router.delete("/removeProduct/:id", validateToken, jsonParser, apiController.removeProduct);
router.get("/getCarts", validateToken, jsonParser, apiController.getCarts);
router.post("/addCart", validateToken, jsonParser, apiController.addCart);
router.get("/auth", jsonParser, apiController.auth);

export default router;

