import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer mt-5">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/Covid-19">Home</Link></li>
                        <li><Link to="/coronavirus">Covid-19?</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/prevention">Prevention</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Sidi Bouzid<br />
		              Souk Jedid , 9121<br />
		              TUNISIA<br />
		              <i className="fa fa-phone fa-lg"></i>: +216 29 554 879<br />
		              <i className="fa fa-fax fa-lg"></i>: +216 *** ***<br />
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/ghnimi.hassen2"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/ghnimi-hassen-43882086/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-github" href="https://github.com/ghnimi1"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;