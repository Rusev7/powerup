import './MainSecction.css';

import ScrollDown from './ScrollDown';

const MainSection = () => {
    return (
        <section className="main-section">
            <img src="/home-image.jpg" alt="A workouting man" className="main-image"/>
            <ScrollDown />
        </section>
    )
}

export default MainSection;