import React from 'react';
import './facts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace ,faAddressBook,faChevronCircleUp,faSmile,faCommentDollar} from "@fortawesome/free-solid-svg-icons";

class facts extends React.Component{
render(){
return(

<div className="facts-container">
<div className="facts ">
    <div className="container">
    <div className="row">
        <div className="co-lg-6 col-md-3 ">
            <div className="icon">
                <FontAwesomeIcon icon={faAddressBook} />
            </div>
            <h4 className="text-center">Our Community<br/><br/>10098</h4>
            
            
        </div>
        <div className="co-lg-6 col-md-3 ">
            <div className="icon">
                <FontAwesomeIcon icon={faChevronCircleUp} />
            </div>
            <h4 className="text-center"> website Vists<br/><br/>43232</h4>
         
        </div>
        <div className="co-lg-6 col-md-3 ">
            <div className="icon">
                <FontAwesomeIcon icon={faSmile} />
            </div>
            <h4 className="text-center">Happy Clients<br/><br/>  167</h4>
          
        </div>
        <div className="co-lg-6 col-md-3 ">
            <div className="icon">
                <FontAwesomeIcon icon={faCommentDollar} />
            </div>
            <h4 className="text-center">Projects<br/><br/>567</h4>
            <span className="text-center"></span>
        </div>

    </div>
</div>
</div>

</div>


);

}

}
export default facts;