import React from 'react';
import './contact.css';

class contact extends React.Component{
    render(){
        return(

<div className="contact container section-header">
    <h3 className="section-title text-center"><span>Contact</span> us</h3>
    <p>using Lorem it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
    <div className="contact">
        <form>
            <div className="form-group"><input className="form-control" type="email" placeholder="please enter your Email"/></div>
            <div className="form-group"><input className="form-control"  type="text" placeholder="please enter your Name here" /></div>
            <div className="form-group">
            <textarea className="form-control" ></textarea>
            </div>

            <button className="btn  btn-sm btn-primary btn-block form-control">Send</button>
        </form>
    </div>
</div>


        );
    }
}

export default contact;