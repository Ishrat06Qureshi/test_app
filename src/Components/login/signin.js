import React , { Component }  from "react";
import axios from "axios";
import "../styles.css";

class Signin extends Component {

    state = {
     
        errors:{}
    }

    handleSubmit = ( event ) => {
         const { email , password , errors  } = this.state
         if(!email) {
             errors.email  = "please fill the email" 
         }
         if(!password) {
             errors.password = "please enter the password"
         }
         
    } 
    render(){
        console.log(this.props )
        const {  data , handleOnChange} = this.props
        return (<div className="form-container sign-in-container">
              <form onSubmit = { this.handleSubmit}>
              <h1> Sign in </h1>

              <div className="social-container">
				<a href="#"><i className="fab fa-facebook-f"></i></a>
				<a href="#"><i className="fab fa-google-plus-g"></i></a>
				<a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>  
                <span>or use your account </span> 
              <input type="email"  name = "email"  placeholder = "email" value={ data.email }  onChange = { handleOnChange} />
              <input type="password"  name = "password"  placeholder = "password" value={ data.password }   onChange = { handleOnChange}/>
              <button type="submit"> Login </button>
              </form>
            </div>)
    }
}

export default Signin