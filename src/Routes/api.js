const express = require("express");
const router= express.Router();
const StudentRegistration = require("../Models/studentModels");
const bcrypt = require("bcryptjs");
const config  = require("config");
const jwt = require("jsonwebtoken");
const secretKey = "sc_testApp"


// router.post("/studentRegistration", ( req , res ) => {
//     console.log( req.body)
//    const { name , courseName , email , number , address  } = req.body
//     const data = {
//         name ,
//         courseName,
//         email,
//         number,
//         address,
//     }

//     StudentRegistration .findOne({email:req.body.email}).
//         then((user) => {
//             if (user){
//                 console.log("email error")
//                 return res.sendStatus(400)
                 
//             }
//             else{
//                 StudentRegistration.create(data).
//                 then((user) => {
//                res.status(200).send("successfully registered")
//                     return
                
//                 })
//             }
//         })
        
        
     
// })
// router.get("/studentRegistration",( req,res) => {
    
//     StudentRegistration.find({}).then(( data )=>{
//         if(data){
//             res.status(200).send(data)
//          }
//          else{
//              res.status(404).send(json({Error:"no data found"}))
//          }
//     })
    
// })

// router.get("/demo" ,(req,res) => {

//     const key = config.get('jwtSecret')
//     console.log( key )

// })


router.post("/StudentRegistration" , (req , res) => {
    const { name , email , number  , address , password } =  req.body
    console.log( name , email , number , address , password )

    if (!name || !email || !password || !number || !address) {
        return res.status(400).json({msg : "please enter valid credentials"})
    }

    // Check for existing user
    StudentRegistration.findOne({ email, }).
    then(( user ) => {
        if( user ) {
          return res.status(400).json({msg : "user with this email address already exist "})
        }
        else {
            const newUser = new StudentRegistration({
                name,
                email,
                address,
                password,
                number
            })
        
             // Create salt & hash
             
             bcrypt.genSalt(10,(err , salt)=>{
                bcrypt.hash(newUser.password, salt,( err , hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save().then( user => {
                       return res.json({ user })
        
                    })
                })
           })
        }
    }).catch((err) => console.log(err));

//     const newUser = new StudentRegistration({
//         name,
//         email,
//         address,
//         password,
//         number
//     })

//      // Create salt & hash
     
//      bcrypt.genSalt(10,(err , salt)=>{
//         bcrypt.hash(newUser.password, salt,( err , hash) => {
//             if(err) throw err;
//             newUser.password = hash;
//             newUser.save().then( user => {
//                return res.json({ user })

//             })
//         })
//    })
})



// router.post("/studentLogin" , ( req , res ) => {
//     const { email , password } = req.body
//     if (!email || ! password)
//     {
//         return res.status(400).json({msg:"invalid credentials"})
//     }
//     StudentRegistration.findOne({email}).then(( user ) => {
//         console.log(user)
//         if(!user) {
//             return res.status(400).json({msg:"no such user found "})
//         } 
//             jwt.sign(
//                 { id:user.id } , 
//                 secretKey,
//                 {expiresIn : "2m"},
//                 (err , token ) => {
//                     if( err ) throw err;
//                     return res.json({
//                         token,
//                         user,
//                     })
//                 })
//         })
//     })  
    








// router.get("/get" , (req , res) => {
//     return res.send("get")
// } )
// router.delete("/delete" , (req , res) => {
//     return res.send("delete")
// } )
// router.put("/put" , (req , res) => {
//     return res.send("put")
// } )

// router.get("/admin" , (req , res) => {
//     return res.send("admin testing")
// } )






module.exports = router