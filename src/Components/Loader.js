import { Spinner} from 'react-bootstrap';
import React from "react";
const Loader = () => {
    return(
        <div>
   <Spinner animation="border" variant="primary"  style={{height:"30px" , width:"30px"}}/>
    </div>)

}
export default Loader