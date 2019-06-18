import validator from "validator";
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/



export const dataValidation = ( data ) => {

    let errors = {} 
    if (data) {
            data.name = isEmpty( data.name) ? data.name : ""
            data.address = isEmpty( data.address) ? data.address : ""
            data.email = isEmpty( data.email) ? data.email : ""
            data.number = isEmpty( data.number) ? data.number : ""
            data.password = isEmpty( data.password) ? data.password : ""
              // verify name to be filled
                if (validator.isEmpty(data.name)){
                errors.name= "name is required"
                
                }

                if(validator.isEmpty(data.password)) {
                    errors.password = "password is required "
                }
                 
               // verify number to be filled and must be in  valid number 
                if (validator.isEmpty( data.number)){
                    errors.number ="number is mandatory"
                }
                else if (!validator.isLength( data.number , {min:11 , max:11})) {
                errors.number="give a valid number"
                }
                else if (!validator.isNumeric( data.number)  )
                {
                    errors.number="give a valid number"
                }
               
               // verify email to be filled and must be in  valid number 
                if (!isEmpty(data.email)){
                    errors.email= "email is required"
                 }
                else if (!validator.isEmail(data.email)){
                    errors.email="please enter a valid email"
    
                }
 

                // verify address to be filled and must be a valid address
                if (validator.isEmpty( data.address)){
                    errors.address ="address is mandatory"
                    
                }
                    // else if (!validator.isLength( data.address , {min:12 , max:40})){
                    // errors.address="your address must be in range between 12 characters to maximum 40 characters"
                    
                    // }
                    else if (checkAddress(data.address)=== false)
                    {
                        errors.address="give a valid address"
                    } 
         return {
             errors,
             isValid:CheckError(errors)
         }
     }  
 }
 

 const isEmpty = ( value ) => {
    
    return (value.length ? true : false)
 }

 const CheckError = ( data ) => {
    return (Object.keys(data ).length ? false : true)
  }
 const checkAddress = ( address ) => {
    if (validator.isAlphanumeric( address)){
        return false
    }
     if (validator.isAlpha(address))
     {
         return false
     }
     if(validator.isNumeric(address)){
         return false
     }
    if (!formate.test(address) ){
        return false
    }
    
}

export const loginValidation = ( data )=> {
   let errors = {} 
   if(!data.email.length){
       errors.email = "Email is required"
   }
   if(!data.password.length){
    errors.password = "password is required"
   }
   return errors
 } 


 