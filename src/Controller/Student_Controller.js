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
// const express = require("express");
// var router = express.Router()

// router.post("/Registration" , (req , res) => {
//     const { name , email , number  , address , password } =  req.body
//     console.log( name , email , number , address , password )

//     if (!name || !email || !password || !number || !address) {
//         return res.status(400).json({msg : "please enter valid credentials"})
//     }

//     // Check for existing user
//     StudentRegistration.findOne({ email, }).
//     then(( user ) => {
//         if( user ) {
//           return res.status(400).json({msg : "user with this email address already exist "})
//         }
//         else {
//             const newUser = new StudentRegistration({ name, email, address, password, number })
        
//              // Create salt & hash
             
//              bcrypt.genSalt(10,(err , salt)=>{
//                 bcrypt.hash(newUser.password, salt,( err , hash) => {
//                     if(err) throw err;
//                     newUser.password = hash;
//                     newUser.save().then( user => {
//                        return res.json({ user })
        
//                     })
//                 })
//            })
//         }
//     })
//     .catch((err) => console.log(err));
// })

// module.exports = router


