"use strict";
const mongoose = require('mongoose');
const mongoAtlasUri = "mongodb+srv://tg5:tg5admin@tabdtg5.3cxsf.mongodb.net/products?retryWrites=true&w=majority";
try {
    // Connect to the MongoDB cluster
    mongoose.connect(mongoAtlasUri, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }, () => console.log("Mongoose is connected"));
}
catch (e) {
    console.log("could not connect");
}
const dbConnection = mongoose.connection;
//dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));
module.exports = dbConnection;
