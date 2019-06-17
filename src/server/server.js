const express = require("express");
const router = require("../Routes/api");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express()
mongoose.connect('mongodb://localhost:27017/testapp', {useNewUrlParser: true});
mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(router)
app.listen(5000 , () => {
    console.log("app is running")
})
module.exports = app