import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
    <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                <img className="logo" src="/images/A-H-logo.png" />
                </div>
                <div className="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Sign in</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Website Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2020 Copyright Ahmed Hesham </p>
        </div>
    </footer>
    )
}

export default Footer
