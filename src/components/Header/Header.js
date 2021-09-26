import React from 'react';
import './Header.css';
import logo from '../../utilities/images/logo.png';
import Festival from '../Festival/Festival';


const Header = () => {
    return (
        <div>
            <div className="header">
                <nav className="d-flex justify-content-between">
                    <div className="navbar-links">
                        <a href="/home">Home</a>
                        <a href="/festival">Festival Info</a>
                        <a href="/singers">Singers</a>
                    </div>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    
                </nav>
                <Festival></Festival>
            </div>
            
        </div>
    );
};

export default Header;