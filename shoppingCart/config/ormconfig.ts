import { createConnection } from "typeorm";
import { Product } from "../src/entities/Product";
import { Cart } from "../src/entities/Cart";

const connectDB = async () => {
  createConnection({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "shop",
    synchronize: true,
    entities: [Product, Cart],
  })
}

export default connectDB;