import './StartSection.css';

import ScrollDown from './ScrollDown';

const MainSection = ({
    handleScrollDown
}) => {
    return (
        <section className="start-section">
            <ScrollDown handleScrollDown={handleScrollDown}/>
        </section>
    )
}

export default MainSection;