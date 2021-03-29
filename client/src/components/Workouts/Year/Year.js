import { useState } from 'react';

import './Year.css'

const Year = ({
    year,
    children
}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="year-container">
            <span className="year-text" onClick={() => setClicked(!clicked)}>{year}</span>
            <div className={`${clicked ? 'year-content-hidden' : ''}`}>{children}</div>
        </div>
    )
}; 

export default Year;