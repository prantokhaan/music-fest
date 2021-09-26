import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icon">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
            </div>
            <p className="mt-2">&#169; Music Fest 2021. All Right Reserved.</p>
        </div>
    );
};

export default Footer;