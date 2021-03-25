import './StartSection.css';

import ScrollDown from './ScrollDown';

const StartSection = ({
    handleScrollDown
}) => {
    return (
        <section className="start-section">
            <ScrollDown handleScrollDown={handleScrollDown}/>
        </section>
    )
}

export default StartSection;