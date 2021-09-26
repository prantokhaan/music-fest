import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Vote from '../Vote/Vote';
import './Bands.css';


const Bands = () => {
    // State and Effect Used 
    const [bands, setBands] = useState([]);
    const [vote, setVote] = useState([]);

    useEffect(() => {
        fetch('./musicbands.JSON')
        .then(res => res.json())
        .then(data => setBands(data));
    }, []);

    // Vote Button 
    const handleVoteButton = band => {
        const newVote = [...vote, band];
        setVote(newVote);
    }
    
    return (
        <div className="bands">
            <div className="bands-container">
                {
                    bands.map(band => <Band
                        key={band.id} 
                        band={band}
                        handleVoteButton={handleVoteButton}
                        >  
                        </Band>)
                }
            </div>
            <div className="vote-container">
                <Vote vote={vote}></Vote>
            </div>
        </div>
    );
};

export default Bands;