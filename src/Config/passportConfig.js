const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var StudentRegistration = require("../Models/studentModels");

passport.use( 
    new localStrategy ({ usernameField : email } , 
        ( email , password , done ) =>{
             StudentRegistration.findOne({email} ,  (err , user) => {
                 if( err )   {
                     return done(err)
                 }
                 else if(!user ) {
                    return done(null, false, { message: 'No such User found' });
                 }
                //  else if () {

                //  }
                else if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                  }
             })
      
        })
 )

 