import { useState } from 'react';

import './Year.css'

const Year = ({
    year,
    children
}) => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="year-container">
            <div className="year-text-container" onClick={() => setClicked(!clicked)}>
                <span className="year-text">{year}</span>
                <span className={`year-arrow ${clicked ? 'flip-up' : ''}`}>&#8679;</span>
            </div>
            <div className={`${clicked ? 'year-content-hidden' : ''}`}>{children}</div>
        </div>
    )
}; 

export default Year;