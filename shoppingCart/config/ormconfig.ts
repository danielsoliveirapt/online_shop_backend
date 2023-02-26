import { createConnection } from "typeorm";
import { Product } from "../src/entities/Product";
import { Cart } from "../src/entities/Cart";

require('dotenv').config();

const connectDB = async () => {
  createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [Product, Cart],
  })
}

export default connectDB;