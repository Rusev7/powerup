import './ScrollDown.css';

const ScrollDown = ({
    handleScrollDown
}) => {
    return (
        <div className="scroll-down-container">
            <img src="/scroll-down.png" alt="Scroll down icon" className="scroll-down-icon" onClick={handleScrollDown}/>
            <span className="scroll-down-text" onClick={handleScrollDown}>register</span>
        </div>
    )
};

export default ScrollDown;