import React  , { Component }from "react";
import Overlay from "./overlay";
import Signin from "./signin";
import Signup from "./signup";
import "../styles.css";



class Container extends Component {

    state = {
        show:false
    }

    toggleClassName = ( flag ) => {
        this.setState(({
                show : flag 
            }))
    }
 
    render(){

        const { show } = this.state 
    return (<div className={ show ? 'container right-panel-active' : 'container'}>
        <Signin/>
        <Signup/>
        <Overlay toggleClassName={ this.toggleClassName } />
        
        
    </div>)
}
}

export default Container 