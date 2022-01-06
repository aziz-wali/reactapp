import React from 'react';
import './blog.css';
import Img1 from '../../../Img/blog1.png';
import Img2 from '../../../Img/blog2.jpg';
import Img3 from '../../../Img/blog3.jpg';
import sections from '../../../sections';


class blog extends React.Component {
    state = {
        images: {
          i:11,i2:33
    }}
   
   x=()=>{
        var imgs=[Img1,Img2,Img3];
        var img =document.getElementById('img');
        var	random= Math.floor(Math.random()*imgs.length);
        img.src=imgs[random];
         }
    render() {
        
        return (

<div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Blog
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, by injected humour
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={Img1} className='card-img-top' alt='Blog 1' />
                <div className='card-body'>
                    <h5 className='card-title'>High Quality Support</h5>
                    <p className='card-text'>
                        Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                        cillum dolore eu fugiat nulla pariatur commodo
                        consequat.cillum dolore eu fugiat pariatur....
                    </p>
                    <a href='#!'  className='btn btn-sm btn-primary'>
                    
                    Read More
                    
                    </a>
                 </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img src={Img2} className='card-img-top' alt='Blog 2' />
                <div className='card-body'>
                  <h5 className='card-title'>Research Financial</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 mb-3'>
              <div className='card rounded-0'>
                <img id="img" src={ setInterval(this.x,2000)} className='card-img-top' alt='Blog 3' />
                <div className='card-body'>
                  <h5 className='card-title'>Business Deal</h5>
                  <p className='card-text'>
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    cillum dolore eu fugiat nulla pariatur commodo
                    consequat.cillum dolore eu fugiat pariatur....
                  </p>
                  <a href='#!' className='btn btn-sm btn-primary'>
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




        );
    }

}
    export default blog;