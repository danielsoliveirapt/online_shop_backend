"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ormconfig_1 = __importDefault(require("../config/ormconfig"));
// Import API Routes
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartsRoutes_1 = __importDefault(require("./routes/cartsRoutes"));
const app = (0, express_1.default)();
// Parse JSON 
app.use(express_1.default.json());
// Create connection with database
(0, ormconfig_1.default)();
// Fetching API from the routes
app.use("/products", productRoutes_1.default);
app.use("/carts", cartsRoutes_1.default);
const port = 5555;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
