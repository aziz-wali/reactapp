import React from 'react';
import './service.css';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";






class service extends React.Component{

    render(){

        return(
            
            <div className='container pt-2 pb-5'>
              <div className='section-header pt-5 pb-5 text-center'>
                <h3 className='section-title'>
                  <span>Our </span>Services
                </h3>
                <h6 className='section-subtitle mr-auto ml-auto'>
                There are many variations of passages of Lorem Ipsum available,
                 but the majority have suffered alteration in some form, by injected humour
                </h6>
              </div>
              <div className='section-content'>
                <div className='row'>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                      <i className="fas fa-address-book"></i>
                      <FontAwesomeIcon icon={faBackspace} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Business Planning</h5>
                        <p className='service-description'>
                        There are many variations of passages of Lorem Ipsum available, but the majority
                         have suffered alteration in some form, by injected humour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                       <FontAwesomeIcon icon={faPen} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Product Marketing</h5>
                        <p className='service-description'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                      <FontAwesomeIcon icon={faHome} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Risk Management</h5>
                        <p className='service-description'>
                        There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                      <FontAwesomeIcon icon={faBook} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Market Research</h5>
                        <p className='service-description'>
                        There are many variations of passages of Lorem Ipsum available, but the majority  
                        have suffered alteration in some form, by injected humour
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                      <FontAwesomeIcon icon={faCalculator} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Business Financing</h5>
                        <p className='service-description'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-4 mb-3'>
                    <div className='service-box d-flex'>
                      <div className='service-icon mr-4'>
                      <FontAwesomeIcon icon={faCartPlus} />
                      </div>
                      <div className='service-body'>
                        <h5 className='service-title'>Suppport Team</h5>
                        <p className='service-description'>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life
                          accusamus terry richardson ad squid
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
        );
    }
}
export default service;