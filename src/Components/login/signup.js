import React , { Component }  from "react";
import dataValidation from "../helper"
import "../styles.css";
import Loader from "../Loader"
class Signup extends Component {
state = {
        name:"",
        number:"",
        address:"",
        email:"",
        password:"" ,
        errors:{},
        isLoading:true,   
    }

handleOnChange = ( event ) => {
      this.setState(({
          [event.target.name] : event.target.value
      }))
    }

reset = () => {
    Object.keys(this.state).map((key, index) => {
        this.setState({[key] : ""});
     });
};

dataValidation = () => {
    const {  password  , email  , name , number , address}  = this.state; 
        const data = {
            name,
            number,
            email,
            address,
            password
        };
        const {errors , isValid} = dataValidation( data );
        
        if( errors ){
             return  this.setState(({errors}))
        }
}
handleSubmit = ( event ) => {
       const {errors}  = this.state
        event.preventDefault()
         this.dataValidation()
         this.reset()
    };
        

    render(){

        const {  password  , email  , name , number , address , errors  , isLoading } = this.state 
        
        return (<div className=" form-container sign-up-container ">
               
               

              
              <form onSubmit = { this.handleSubmit}>
              <h1> Create Account  </h1>

         <div  className="social-container">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
          {/* <span style = {{color:"red"}}>Sorry, Something went wrong </span>
          { isLoading? <Loader/> : null} */}
              <input type="text"  name = "name"  placeholder  ="name" value={ name } onChange = {this.handleOnChange}/>
              {errors.name ? <p style= {{color:'red' , marginLeft:'20px' , marginTop:"0px" , marginBottom:"0px"}}>{errors.name}</p> : null  }

              <input type="text"  name = "number"   placeholder  ="contact number" value={ number } onChange = {this.handleOnChange}/>
              {errors.number ? <p style= {{color:'red', marginLeft:'20px', marginTop:"0px" , marginBottom:"0px"}}>{errors.number}</p> : null  }

              <input type="text"  name = "address"  placeholder  ="address"  value={ address } onChange = {this.handleOnChange}/>  
              {errors.address ? <p style= {{color:'red' , marginLeft:'20px', marginTop:"0px" , marginBottom:"0px"}}>{errors.address}</p> : null  } 

              <input type="email"  name = "email"  placeholder  ="email"  value={ email } onChange = {this.handleOnChange}/>
              {errors.email ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"0px"}}>{errors.email}</p> : null  }

              <input type="password"  name = "password"  placeholder  ="password" value={ password } onChange = {this.handleOnChange}/>
              {errors.password ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"0px"}}>{errors.password}</p> : null  }


              <button type="submit"> Register </button>
              </form>
               
            </div>)
    }
}


export default Signup