import React , { Component }  from "react";
import axios from "axios";
import { loginValidation } from "../helper"
import "../styles.css";
import Loader from "../Loader";
import { withRouter} from "react-router"
 

class Signin extends Component {

    state = {
     
        errors:{}
    }

    handleSubmit = ( event ) => {
        event.preventDefault()
        const { email , password } =  this.props.data
       
        const { setFlags  , history } = this.props
        const errors = loginValidation({  email , password });
      
        if(Object.keys(errors).length ){
            return setFlags({ errors , 
                isLoading:false ,
                })
        }
        setFlags({ isLoading:true , errors:{} })
       axios.post("/studentLogin" , {email , password }).
       then((response ) => {
           console.log(response)
            setFlags({isLoading:false})
            history.push("/dashboard")
            
       }).catch( err => {
        const {msg} = err.response.data
        return setFlags({ isLoading:false , errMsg:msg })
       })
    } 
    render(){
        
        const {  data , handleOnChange} = this.props
        const { email , password , isLoading , errors , errMsg } = data 

        console.log( "in singin",this.props.history )
        return (<div className="form-container sign-in-container">
              <form onSubmit = { this.handleSubmit} >
              <h1> Sign in </h1>

              <div className="social-container">
				<a href="#"><i className="fab fa-facebook-f"></i></a>
				<a href="#"><i className="fab fa-google-plus-g"></i></a>
				<a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>  
                <span>or use your account </span> 
                { isLoading ? <Loader/>: <div>

                        { errMsg ? <span style = {{color:"red"}}>{ errMsg}</span>:null}
                        <input type="email"  name = "email"  placeholder = "email" value={ email }  onChange = { handleOnChange } />
                        {errors.email ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"0px"}}>{errors.email}</p> : null  }


                        <input type="password"  name = "password"  placeholder = "password" value={ password }   onChange = { handleOnChange }/>
                        {errors.password ? <p style= {{color:'red' ,marginLeft:'20px' ,  marginTop:"0px" , marginBottom:"5px"}}>{errors.password}</p> : null  } 

                        <button type="submit"> Login </button>
                </div>
                }
              </form>
            </div>)
    }
}

export default withRouter(Signin)