import { createConnection } from "typeorm";
import { Product } from "../src/entities/Product";
import { Cart } from "../src/entities/Cart";

const connectDB = async () => {
  createConnection({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "shop",
    synchronize: true,
    entities: [Product, Cart],
  })
}

export default connectDB;