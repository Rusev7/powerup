import './Year.css'

const Year = ({
    year,
    children
}) => {
    return (
        <div className="year-container">
            <span className="year-text">{year}</span>
            {children}
        </div>
    )
}; 

export default Year;