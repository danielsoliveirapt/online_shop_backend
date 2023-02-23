/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, responseType");
   next();
});


//import routes
const ProductsRoutes = require('./routes/productsRoutes');

//use routes
app.use('/API/v1/', ProductsRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`))*/

const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productsRoutes.js");

const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://tg5:tg5admin@tabdtg5.3cxsf.mongodb.net/products?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(productRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});





