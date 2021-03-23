import './MainSecction.css';

import ScrollDown from './ScrollDown';

const MainSection = ({
    handleScrollDown
}) => {
    return (
        <section className="main-section">
            <ScrollDown handleScrollDown={handleScrollDown}/>
        </section>
    )
}

export default MainSection;