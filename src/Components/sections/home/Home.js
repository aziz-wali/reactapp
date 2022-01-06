import React from 'react';
import './home.css';
import homeImg from '../../../Img/bg.jpg';
import sections from '../../../sections';


class home extends React.Component {
    render() {
        return (
<div className="home-content p-5" >
    <div className="intro container text-center text-light"><h1 className="title">WELCOME</h1>
    <h2 className="sub-title mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum minus molestiae.</h2>
    <a className="btn btn-primary rounded-0 mr-2" >Learn More</a>
    <a className="btn btn-light text-dark rounded-0" >Contact Us</a>
</div>
</div>
);
}
}

export default home;
