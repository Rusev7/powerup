import './Month.css';

const Month = ({
    month,
    children
}) => {
    return (
        <div className="month-container">
            <span className="month-text">{month}</span>
            {children}
        </div>
    )
}

export default Month;