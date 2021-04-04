import { useState } from 'react';

import './Month.css';

const Month = ({
    month,
    children
}) => {

    const [clicked, setClicked] = useState(false);

    return (
        <div className="month-container">
            <div className="month-text-container" onClick={() => setClicked(!clicked)}>
                <span className="month-text">{month}</span>
                <span className={`month-arrow ${clicked ? 'flip-up' : ''}`}>&#8679;</span>
            </div>
            <div className={`${clicked ? 'month-content-hidden' : ''}`} >{children}</div>
        </div>
    )
}

export default Month;