import express, { Request, Response } from "express";
import connectDB from "../config/ormconfig";

// Import API Routes
import productsRoutes from "./routes/productRoutes";
import cartsRoutes from "./routes/cartsRoutes";

const app = express();

// Parse JSON 
app.use(express.json());

// Create connection with database
connectDB();

// Fetching API from the routes
app.use("/products", productsRoutes);
app.use("/carts", cartsRoutes);

const port = 5555;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})