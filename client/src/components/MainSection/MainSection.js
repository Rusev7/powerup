import './MainSection.css';

import NavigationButton from './NavigationButton';

const MainSection = () => {
    return (
        <section className="main-section">
            <NavigationButton linkTo="/create-workout" text="create a" highlighted="workout" />
            <NavigationButton linkTo="/my-workouts" text="my" highlighted="workouts" />
            <NavigationButton linkTo="/progress" text="check your" highlighted="progress" />
            <NavigationButton linkTo="/progress" text="check your" highlighted="progress" />
        </section>
    )
};

export default MainSection;