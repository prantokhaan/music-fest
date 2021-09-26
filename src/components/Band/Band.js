import React from 'react';
import './Band.css';

const Band = (props) => {
    // Destructuring 
    const {name, cover_photo, vocal, guitarist, totalSongs, fee, genre} = props.band;

    return (
        <div>
            <div className="band">
                {/* Band Image  */}
                <div className="band-img">
                    <img src={cover_photo} alt="" />
                </div>
                {/* Band Info  */}
                <div className="band-info mt-3">
                    <h3 className="mb-3">{name}</h3>
                    <p>Vocal: <b>{vocal}</b></p>
                    <p>Genre: <b>{genre}</b></p>
                    <p>Guitarist: <b>{guitarist}</b></p>
                    <p>Total Songs: <b>{totalSongs}</b></p>
                    <h4>Fee: <i className="fw-bold">${fee}</i></h4>
                    <div className="d-flex justify-content-around">
                        {/* Button and Social Icon  */}
                        <button
                          onClick={() => props.handleVoteButton(props.band)}
                          ><i className="fas fa-vote-yea"></i>
                               Vote {name}
                        </button>
                        <div>
                            <i class="fab fa-facebook me-3 mt-3"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Band;