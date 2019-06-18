import React  , { Component }from "react";
import Overlay from "./overlay";
import Signin from "./signin";
import Signup from "./signup";
import "../styles.css";



class Container extends Component {
    state = {
        show:false,
        name:"",
        number:"",
        address:"",
        email:"",
        password:"" ,
        errors:{},
        isLoading:false,   
        errMsg:"",
        successfullyRegister :false,
       
    }

    handleOnChange = ( event ) => {
        this.setState(({
            [event.target.name] : event.target.value
        }))
      }

    toggleClassName = ( flag ) => {
        this.setState(({
                show : flag 
            }))
    }
 

    reset = () => {
        this.setState(({
        name:"",
        number:"",
        address:"",
        email:"",
        password:"" ,
        errors:{},
        isLoading:false,   
        errMsg:"",
        successfullyRegister :false,
        email:"",
        password:"",
        }))
    }
    render(){
       
        const { show } = this.state 

         return (
         <div className={ show ? 'container right-panel-active' : 'container'}>
                <Signin handleOnChange = { this.handleOnChange } data = {this.state}/>
                <Signup handleOnChange = { this.handleOnChange } data = {this.state} />
                <Overlay toggleClassName={ this.toggleClassName } reset = { this.reset } />
        
        
    </div>)
}
}

export default Container 