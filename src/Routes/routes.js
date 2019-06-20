const express = require("express");

const cntrl_Student = require("../Controller/Student_Controller");
var router = express.Router();

 

router.post("/Registration" , cntrl_Student.register);
router.post("/login" , cntrl_Student.login)

module.exports = router  