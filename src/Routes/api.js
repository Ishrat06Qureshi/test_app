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


// router.post("/StudentRegistration" , (req , res) => {
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
//             const newUser = new StudentRegistration({
//                 name,
//                 email,
//                 address,
//                 password,
//                 number
//             })
        
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
//     }).catch((err) => console.log(err));
// })





// router.post("/studentLogin" , ( req , res ) => {
//     const { email , password } = req.body
//     console.log( "email , password",email , password )
//     if (!email || ! password)
//     {
//         return res.status(400).json({msg:"invalid credentials"})
//     }
//     StudentRegistration.findOne({email}).
//     then(( user ) => {
      
//         if(!user) {
//             return res.status(400).json({msg:"no such user found "})
//         } 

//         return res.status(200).json({user,})
//         // bcrypt.compare( password , user.password ) .then(( res) => {
                    
            //         jwt.sign( 
            //             { id:user.id } , 
            //             secretKey,
            //             {expiresIn : "2m"},
            //             (err , token ) => {
            //                 if( err ) throw err;
            //                 return res.json({
            //                     token,
            //                     user,
            //                 })
            //             })
            //    })
//             // jwt.sign( 
//             //     { id:user.id } , 
//             //     secretKey,
//             //     {expiresIn : "2m"},
//             //     (err , token ) => {
//             //         if( err ) throw err;
//             //         return res.json({
//             //             token,
//             //             user,
//             //         })
//             //     })
//         }).catch( err => console.log(err))
//     })  
    











// router.post("/studentRegistration", (req, res) => {

    // const { name,  email, number, address } = req.body
    // const data = {
    //     name,
    //     email,
    //     number,
    //     address,
    // }
    // StudentRegistration.findOne({ email: req.body.email }).
    //     then((user) => {
    //         if (user) {

    //             return res.status(400).send("user with this email already exist")
    //         }
    //         else {
    //             StudentRegistration.create(data).
    //                 then((user) => {
    //                     res.status(200).send("successfully registered")
    //                     return

    //                 })
    //         }
    //     })


//     console.log("hello world ")


// })


// router.get("/studentRegistration", (req, res) => {

//     StudentRegistration.find({}).then((data) => {
//         if (data) {
//             res.status(200).send(data)
//         }
//         else {
//             res.status(404).send(json({ Error: "no data found" }))
//         }
//     })

// })



// router.post("/Course", (req, res) => {

//     const { courseName, courseDetails } = req.body
//     const data = {
//         courseName,
//         courseDetails,
//     }

//     CourseRegistration.findOne({ courseName: req.body.courseName }).
//         then((course) => {
//             if (course) {
//                 return res.status(400).send("course with this name already exist")
//             }
//             else {
//                 CourseRegistration.create(data).
//                     then((course) => {
//                         res.status(200).send("successfully registered")
//                         return

//                     })
//             }
//         })
// })

// router.get("/Course", (req, res) => {

//     CourseRegistration.find({}).select('courseName Registeredstudents').
//     populate("Registeredstudents", "name").
//     then( (courses) => {
//         return res.status(200).json(courses)
//     });
    
// });
// router.post("/courseEnroll", (req, res) => {

//     const { studentId, courseId } = req.body



//     let courses = []
//     let students = []

//     //     StudentRegistration.findById(studentId).then((std) => {

//     //         if(std){

//     //             CourseRegistration.findById(courseId).then((crs) => {

//     //                 if(crs){

//     //                     std.Registeredcourses.push(courseId);
//     //                     crs.Registeredstudents.push(studentId);

//     //                     StudentRegistration.findByIdAndUpdate(studentId,std).then( (stdReg) => {

//     //                         console.log("Student Registration");
//     //                         console.log(stdReg)
//     //                     } );

//     //                     CourseRegistration.findByIdAndUpdate(courseId,crs).then((crsReg) => {
//     //                         console.log("Course Registration");
//     //                         console.log(crsReg)   
//     //                     })
//     //                 }
//     //             })
//     //         }
//     //     })

//     // })

//     StudentRegistration.findById(studentId).then((student) => {

//         const { Registeredcourses } = student

//         courses = [...student.Registeredcourses, courseId]
//         if (Registeredcourses.includes(courseId)) {
//             return res.status(400).send("already register in this course")
//         }
//         StudentRegistration.findByIdAndUpdate(studentId, { Registeredcourses: courses })
//             .then(() => {


//                 CourseRegistration.findById(courseId).then((course) => {

//                     students = [...course.Registeredstudents, studentId]

//                     CourseRegistration.findByIdAndUpdate(courseId, { Registeredstudents: students }).
//                         then(() => {
//                             return res.status(200).send("suceessfully register")

//                         })
//                 })
//             })
//     })




// })



module.exports = router