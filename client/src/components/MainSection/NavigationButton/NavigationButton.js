import './NavigationButton.css';

import { Link } from 'react-router-dom';

const NavigationButton = ({
    text
}) => {
    return (
        <Link>
            <div className="button-container">
                <p>{text}</p>
            </div>
        </Link>
    )
}

export default NavigationButton;