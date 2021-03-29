import './ErrorNotification.css';

const ErrorNotification = ({
    message
}) => {
    if(!message) {
        return null;
    }

    return (
        <div className="error-message">{message}</div>
    )
};

export default ErrorNotification;