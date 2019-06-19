import React , { Component }  from "react";
import  {dataValidation } from "../helper"
import "../styles.css";
import Loader from "../Loader";
import axios from "axios";
class Signup extends Component {
state = {
      
        errors:{},
        number:"",
        address:"",
        email:"",
        password:"" ,
        isLoading:false,   
        errMsg:"",
        successfullyRegister :false, 
}




handleSubmit = ( event ) => {
        
        event.preventDefault()
        
        const {  password  , email  , name , number , address}  = this.props.data;
        const {setFlags } = this.props 
     
        const {errors} = dataValidation({ name , email , password , number , address });
        if(Object.keys(errors).length ){
            return setFlags({ errors , 
                isLoading:false ,
                 successfullyRegister:false  })
        }

        setFlags({ isLoading:true , errors:{} })
        

        axios.post("/StudentRegistration" , {name , email , password , number , address }).
        then(( res ) => {
            return setFlags({  isLoading:false , 
                successfullyRegister:true  })
        }).
        catch(err => 
            {
                const {msg} = err.response.data
                return setFlags({ errors:{} , isLoading:false , successfullyRegister:false , errMsg:msg })
            } )
    };
        

   
    render(){
         const { handleOnChange , data  } = this.props
        const { password  , email  , name , number , address  , isLoading , errors , errMsg , successfullyRegister } = data 

        console.log( this.props)
        return (<div className=" form-container sign-up-container ">
               
              <form onSubmit = { this.handleSubmit}>
              <h1> Create Account  </h1>
                    <div  className="social-container">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>

          {isLoading ? <Loader/> : 
          ( successfullyRegister ? <span> You have been successfully Register please login to continue further</span> : 
           <div>        { errMsg ? <span style = {{color:"red"}}>{ errMsg}</span>:null}
           

           <input type="text"  name = "name"  placeholder  ="name" value={ name } onChange = {handleOnChange}/>
           {errors.name ? <p style= {{color:'red' , marginLeft:'20px' , marginTop:"0px" , marginBottom:"0px"}}>{errors.name}</p> : null  }

           <input type="text"  name = "number"   placeholder  ="contact number" value={ number } onChange = {handleOnChange}/>
           {errors.number ? <p style= {{color:'red', marginLeft:'20px', marginTop:"0px" , marginBottom:"0px"}}>{errors.number}</p> : null  }

           <input type="text"  name = "address"  placeholder  ="address"  value={ address } onChange = {handleOnChange}/>  
           {errors.address ? <p style= {{color:'red' , marginLeft:'20px', marginTop:"0px" , marginBottom:"0px"}}>{errors.address}</p> : null  } 

           <input type="email"  name = "email"  placeholder  ="email"  value={ email } onChange = {handleOnChange}/>
           {errors.email ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"0px"}}>{errors.email}</p> : null  }

           <input type="password"  name = "password"  placeholder  ="password" value={ password } onChange = {handleOnChange}/>
           {errors.password ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"5px"}}>{errors.password}</p> : null  }

           <button type="submit"> Register </button>
          </div> )}
              </form>
              
            </div>)
    }
  
    
}


export default Signup