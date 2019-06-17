// const mongoose = require('mongoose');
// const passport = require('passport');
// const _ = require('lodash')
// const StudentRegistration = require("../Models/studentModels/StudentRegistration")


// module.exports.register = ( req , res , next ) => {
//     const { name , email , number  , address , password } =  req.body

//     if (!name || !email || !password || !number || !address) {
//         res.status(400).json({msg : "please enter valid credentials"})
//     }
//     const data = {
//         name,
//         email,
//         number,
//         address,
//         password
//     }
//     StudentRegistration.findOne({ email }).then(( user ) => {
//           if( user ) {
//               return res.status(400).json({msg:"user with this email already exist "})
//           }
//      });

//      const Student = new StudentRegistration(data)
//      Student.save().then(( user )  => {
//          if(user) {

//          }
//      }
//      )
     



// }
