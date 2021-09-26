import React from 'react';
import Votelist from '../Votelist/Votelist';
import './Vote.css'

const Vote = (props) => {
    const {vote} = props;

    let name = '';
    let popularSong = '';
    let fee = 0;
    for(const band of vote){
        name = band.name;
        fee = fee + band.fee;
    }
    for(const band of vote){
        popularSong = band.popularSong;
    }
    return (
        <div className="voting">
            <h5>Total Voted: <b className="color">{props.vote.length}</b> bands</h5>
            <h5>Total Fee: <b className="color">${fee}</b></h5>
            {
                vote.map(band => <Votelist band={band}></Votelist>)
            }
        </div>
    );
};

export default Vote;