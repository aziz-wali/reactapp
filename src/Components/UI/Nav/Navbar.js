//import ReactHelmet from 'react-helmet';
import React, {Component} from "react";
import {BrowserRouter,Route,Switch, Link} from "react-router-dom";
import About from "../../sections/about/About";
import Home from "../../sections/home/Home";
class Navbar extends Component {
    render(){
  return (
   
 <BrowserRouter>
<nav className="navbar navbar-expand-lg navbar-light ">
<script src="https://use.fontawesome.com/679dbfbd60.js"></script>
     
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Awali</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            
        <Link className="nav-link" to="/" >Home</Link>
        
       
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
            
            
        
       
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Option1</a></li>
            <li><a className="dropdown-item" href="#">Option2</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Option3</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact</a>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
<Switch>
           
           
            </Switch>
</BrowserRouter>
    );
  }
}

export default Navbar;
