import './Day.css';

const Day = ({
    day,
    children
}) => {
    return (
        <div className="day-container">
            <span className={`day-text ${day.includes('Monday') ? 'end-week' : ''}`}>{day}</span>
            {children}
        </div>
    )
};

export default Day;