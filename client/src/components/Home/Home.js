import { useRef } from 'react';

import MainSection from '../MainSection';
import StartSection from '../StartSection';
import RegisterSection from '../RegisterSection';
import Footer from '../Footer';

const Home = ({
    loggedIn,
    error
}) => {
    const regSection = useRef();

    const handleScrollDown = () => {
        regSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    if(loggedIn) {
        return (
            <div className="fade-in">
                <MainSection />
                <Footer />
            </div>
        );
    } else {
        return (
            <div className="fade-in">
                <StartSection handleScrollDown={handleScrollDown} error={error}/>
                <RegisterSection ref={regSection}/>
            </div>
        )
    }
    
}

export default Home;