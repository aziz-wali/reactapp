import React from 'react';
import './footer.css';
//import Link from '../link/link';

class footer extends React.Component{
    render(){

        return(

        
<footer className=''>
<div className='container text-light pt-5'>
  <div className='row'>
    <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
      <div className='footer-title'>
        <h6>About Us</h6>
      </div>
      <div className='footer-content'>
        <p>
          <small className='text-muted'>
            Aenean suscipit eget mi act fermentum phasellus vulputate
            turpis tincidunt. Aenean suscipit eget. Aenean suscipit eget
            mi act fermentum phasellus vulputate turpis tincidunt. Aenean
            suscipit ege Aenean suscipit eget mi act fermentum phasellus.
          </small>
        </p>
        <button className='btn btn-sm btn-primary rounded-0'>
          Learn more
        </button>
      </div>
    </div>
    <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
      <div className='footer-title'>
        <h6>Quick Links</h6>
      </div>
      <div className='footer-content'>
        <ul className='list-group quick-links'>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Blog</li>
        <li>Service</li>
        
        </ul>
      </div>
    </div>
    <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
      <div className='footer-title'>
        <h6>Latest News</h6>
      </div>
      <div className='footer-content'>
        <p>
          <small className='text-muted'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </small>
        </p>
        <p>
          <small className='text-muted'>
            Pellentesque et pulvinar enim. Quisque at tempor ligula Natus
            error sit voluptatem
          </small>
        </p>
        <p>
          <small className='text-muted'>accusantium doloremque</small>
        </p>
      </div>
    </div>
    <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
      <div className='footer-title'>
        <h6>Contact Us</h6>
      </div>
      <div className='footer-content'>
        <p className='text-muted'>
          <small>Address : Eschenbach str7 Ludwigshafen, Germany </small>
        </p>
        <p className='text-muted'>
          <small>Phone : +49 178453333</small>
        </p>
        <p className='text-muted'>
          <small>E-mail : contactme@email.com</small>
        </p>
        <div className='social-media mt-4'>
          <a href='!#' className='text-light'>
            <i className='fab fa-facebook-f mr-4' />
          </a>
          <a href='!#' className='text-light'>
            <i className='fab fa-twitter mr-4' />
          </a>
          <a href='!#' className='text-light'>
            <i className='fab fa-instagram mr-4' />
          </a>
          <a href='!#' className='text-light'>
            <i className='fab fa-github' />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='bottom-footer pt-3 pb-3 text-center'>
  <small>?? All Right Reserved. Design By Aziz wali</small>
</div>
</footer>



);
}
}

export default footer;
