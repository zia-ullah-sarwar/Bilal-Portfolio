import React from 'react'
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="bg-dark p-5 text-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                     <a href="tel:+923247916171">   <p className="btn btn-outline-secondary rounded-pill"><i class="fas fa-phone-alt fs-2 p-3"></i><span className="m-3 fs-5">+92 324 7916171</span></p></a>
                    </div>
                    <div className="col-sm-4">
                        <p className="btn btn-outline-secondary rounded-pill"><i class="fas fa-envelope fs-2 p-3"></i><span className="m-3 fs-5">bilal.arif2917@gmail.com</span></p>
                    </div>
                    <div className="col-sm-4">
                        <SocialLinks />
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* <div className="float-end fixed-bottom">
                <button onclick="topFunction()" id="myBtn" title="Go to top" className="btn btn-secondary me-3 mb-3 fixed fs-3 float-end"><i class="fa fa-arrow-up fa-sm"></i></button>
            </div> */}
        </footer>
    )
}

export default Footer;
