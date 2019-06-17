const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name:{
        type:String,
        required: [true , "name is required"]
    },
    number:{
        type:String,
        required: [true , "number is required"]
    },
    address:{
        type:String,
        required: [true , "address is required"]
    },

    email:{
        type:String,
        required: [true , "email is required"]
    },
    password:{
        type:String,
        required: [true , "password is required"]
    },
    Registeredcourses:[]
})
const StudentRegistration = mongoose.model("StudentRegistration" , studentSchema)
module.exports= StudentRegistration 