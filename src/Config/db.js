const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/testapp', {useNewUrlParser: true} , ( err ) => {
    if(!err) {
        console.log("successfully build the connection" , JSON.stringify(err, undefined , 2))
    }
    else{
        console.log("something went wrong")
    }
});

module.exports = mongoose