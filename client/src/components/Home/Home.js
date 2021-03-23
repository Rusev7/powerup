import { useRef } from 'react';

import Navigation from '../Navigation';
import MainSection from '../MainSection';
import RegisterSection from '../RegisterSection';

const Home = () => {
    const regSection = useRef();

    const handleScrollDown = () => {
        regSection.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <Navigation />
            <MainSection handleScrollDown={handleScrollDown}/>
            <RegisterSection ref={regSection}/>
        </div>
    )
}

export default Home;