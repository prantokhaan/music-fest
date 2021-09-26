import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './Bands.css';


const Bands = () => {
    const [bands, setBands] = useState([]);

    useEffect(() => {
        fetch('./musicbands.JSON')
        .then(res => res.json())
        .then(data => setBands(data));
    }, []);
    
    return (
        <div className="bands">
            <div className="bands-container">
                {
                    bands.map(band => <Band
                        key={band.id} 
                        band={band}
                        ></Band>)
                }
            </div>
            <div className="vote-container">

            </div>
        </div>
    );
};

export default Bands;