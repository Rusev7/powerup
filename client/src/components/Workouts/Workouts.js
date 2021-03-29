import './Workouts.css';

import Year from './Year';
import Month from './Month';
import Day from './Day';

const Workouts = () => {
    const workouts = [
        [   
            [
                {
                    workoutName: 'Ivan',
                    weight: 80,
                    exercises: [
                        {
                            name: 'Ivan exercise',
                            sets: [
                                {
                                    reps: 12,
                                    weight: 80
                                },

                                {
                                    reps: 10,
                                    weight: 90,
                                },

                                {
                                    reps: 8,
                                    weight: 100
                                }
                            ]
                        }
                    ]
                }
            ],
            [],
            []
        ]
    ];

    return (
        <div className="fade-in workout-component-wrapper">
            {workouts.length === 0 && <span className="empty-message">No workouts yet!</span>}
            <div className="workout-history">
                <Year year="2021">
                    <Month month="March">
                        <Day day="Tuesday 30">
                            <div className="info-container">
                                <h3 className="info-workout-name">Ivan</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Monday 29">
                            <div className="info-container">
                                <h3 className="info-workout-name">Chest</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Friday 26">
                            <div className="info-container">
                                <h3 className="info-workout-name">Back</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Thursday 25"></Day>
                        <Day day="Wednesday 24"></Day>
                        <Day day="Tuesday 23"></Day>
                        <Day day="Monday 22"></Day>
                    </Month>
                </Year>

                <Year year="2020">
                    <Month month="March">
                        <Day day="Tuesday 30">
                            <div className="info-container">
                                <h3 className="info-workout-name">Ivan</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Monday 29">
                            <div className="info-container">
                                <h3 className="info-workout-name">Chest</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Friday 26">
                            <div className="info-container">
                                <h3 className="info-workout-name">Back</h3>
                                <button className="info-workout-btn">Details</button>
                            </div>
                        </Day>
                        <Day day="Thursday 25"></Day>
                        <Day day="Wednesday 24"></Day>
                        <Day day="Tuesday 23"></Day>
                        <Day day="Monday 22"></Day>
                    </Month>
                </Year>
            </div>

            <form className="workout-container">
                <h1 className="workout-container-name">Workout name</h1>
                <h2 className="workout-container-date">25/03/2021</h2>
                <h3 className="workout-container-weight">Weight: 80kg</h3>
            </form>
        </div>
    )
};

export default Workouts;