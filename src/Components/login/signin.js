import React , { Component }  from "react";
import "../styles.css";
class Signin extends Component {

    state = {
        email:"",
        password:""
    }


    handleOnChange = ( event ) => {
      this.setState(({
          [event.target.name] : event.target.value
      }))
    }

    handleSubmit = () => {
        console.log( this.state )
    }
    render(){

        const {  password  , email } = this.state 
        return (<div className="form-container sign-in-container">
              <form onSubmit = { this.handleSubmit}>
              <h1> Sign in </h1>

              <div className="social-container">
				<a href="#"><i className="fab fa-facebook-f"></i></a>
				<a href="#"><i className="fab fa-google-plus-g"></i></a>
				<a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>  
                <span>or use your account </span> 
              <input type="email"  name = "email"  placeholder = "email" value={ email }  onChange = { this.handleOnChange} />
              <input type="password"  name = "password"  placeholder = "password" value={ password }   onChange = { this.handleOnChange}/>
              <button type="submit"> Login </button>
              </form>
            </div>)
    }
}

export default Signin