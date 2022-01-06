import React from 'react';
import './TopBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter ,faFacebook} from '@fortawesome/free-brands-svg-icons';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className="sub-elements">
          <span>+49 1786 456 324 </span>
          <span>&nbsp; contact@emaiol.com</span>
      
            <div className="social-icons">
                <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            
                <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
      </div>
    </div>
  );
};

export default topBar;
