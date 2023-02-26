const express = require("express");
const port = 4545;
const mongoose2 = require("mongoose");
const productRouter = require("./routes/productsRoutes.js");

const app = express();

require('dotenv').config();

app.use(express.json());
mongoose2.set("strictQuery", true);
mongoose2.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/products?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(productRouter);

app.listen(port, () => {
  console.log(`Products server is running and listening on port ${port}!`);
});