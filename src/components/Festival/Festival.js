import React from 'react';
import './Festival.css';
import festiveImg from '../../utilities/images/music.png';

const Festival = () => {
    return (
        <div className="container background">
            <div className="festival">
                <div className="festival-image">
                    <img src={festiveImg} alt="" />
                </div>
                <div className="festival-info">
                    <h5>We are organizing a <span className="color-primary"><b>Music Festival</b></span> on 14th November. We will invite some best singers from Bangladeshi Bands. You can Join us on that day. <br /> You can also vote which band you want to listen on that festival.</h5>
                    <h4>Our Budget: <span className="color-primary"><b>$100 Million</b></span></h4>
                    <button><i className="fas fa-arrow-circle-down"></i>  Vote Now</button>
                </div>
            </div>
        </div>
    );
};

export default Festival;