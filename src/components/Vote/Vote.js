import React from 'react';
import Votelist from '../Votelist/Votelist';
import './Vote.css'

const Vote = (props) => {
    // Destructure 
    const {vote} = props;

    // Set Fee
    let fee = 0;
    for(const band of vote){
        fee = fee + band.fee;
    }
    
    return (
        // Voted Info 
        <div className="voting">
            <h5>Total Voted: <b className="color">{props.vote.length}</b> bands</h5>
            <h5>Total Fee: <b className="color">${fee}</b></h5>
            <hr />
            {
                vote.map(band => <Votelist 
                    key={band.id}
                    band={band}
                    ></Votelist>)
            }
        </div>
    );
};

export default Vote;