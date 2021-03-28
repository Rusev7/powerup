import './NavigationButton.css';

import { Link } from 'react-router-dom';

const NavigationButton = ({
    linkTo,
    text,
    highlighted
}) => {
    return (
        <Link to={linkTo} className="main-button">
            <div className="main-button-text">
                {text} <span className="text-red">{highlighted}</span>
            </div>
        </Link>
    )
}

export default NavigationButton;