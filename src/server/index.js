const express = require("express");
const bodyParser = require("body-parser");


const { mongoose }  = require("../Config/db");
// const mongoose = require("");

var app = express()
app.use(bodyParser.json())
app.listen(5000 , () => {
    console.log("app is running on port 5000")
})
app.use("/student")