import React , {Component} from "react";
import "../styles.css";



class Overlay  extends Component {
  
    

    render(){

      const { toggleClassName  , reset } =  this.props 
    return(<div  className="overlay-container">
    <div className="overlay" >
        <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick ={ ( )=> { toggleClassName(false)  
              reset()
            } }>Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
            <h1>Hello !</h1>
            <p>Enter your credentials and start journey with us</p>
            <button className="ghost" id="signUp" onClick ={ ()=> {toggleClassName(  true ) 
            reset()
            } }> Sign Up</button>
        </div>
    </div>
</div>
)}
 }
export default Overlay