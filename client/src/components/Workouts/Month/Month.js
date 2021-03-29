import { useState } from 'react';

import './Month.css';

const Month = ({
    month,
    children
}) => {

    const [clicked, setClicked] = useState(false);

    return (
        <div className="month-container">
            <span className="month-text" onClick={() => setClicked(!clicked)}>{month}</span>
            <div className={`${clicked ? 'month-content-hidden' : ''}`} >{children}</div>
        </div>
    )
}

export default Month;