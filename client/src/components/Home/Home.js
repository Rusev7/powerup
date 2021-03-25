import { useRef } from 'react';

import MainSection from '../MainSection';
import StartSection from '../StartSection';
import RegisterSection from '../RegisterSection';
import Footer from '../Footer';

const loggedIn = true;

const Home = () => {
    const regSection = useRef();

    const handleScrollDown = () => {
        regSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    if(loggedIn) {
        return (
            <>
                <MainSection />
                <Footer />
            </>
        );
    } else {
        
        return (
            <>
                <StartSection handleScrollDown={handleScrollDown}/>
                <RegisterSection ref={regSection}/>
            </>
        )
    }
    
}

export default Home;