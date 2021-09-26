import React from 'react';
import './Votelist.css';

const Votelist = (props) => {
    const {name, cover_photo, popularSong} = props.band;
    return (
        <div>
            <div className="voting-list">
                <div>
                    <i className="fas fa-play"></i>
                    <img src={cover_photo} alt="" />
                </div>
                <div>
                    <h5 className="color mt-2"><b>{name}</b></h5>
                    <p>Listen Now  <br /><b className="song">{popularSong}</b></p>
                </div>
            </div>
        </div>
    );
};

export default Votelist;