import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getWorkotus } from '../../services/workoutService';

import './Workouts.css';

import Year from './Year';
import Month from './Month';
import Day from './Day';
import CurrentWorkout from './CurrentWorkout';

const Workouts = () => {

    const [workouts, setWorkouts] = useState([]);
    const [currentWorkout, setCurrentWorkout] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('user')).id;
        
        getWorkotus(userId)
            .then(res => res.json())
            .then(data => {
                const workoutsData = data.workouts;
                setWorkouts(workoutsData)
            });
    }, [])

    if(!localStorage.getItem('user')) {
        history.push('/');
        return null;
    }


    return (
        <div className="fade-in workout-component-wrapper">
            {workouts.length === 0 && <span className="empty-message">No workouts yet!</span>}

            
            <div className="workout-history">
                {workouts.map(year => {
                    return <Year key={year.year} year={year.year}>
                        {year.months.map(month => {
                            const [monthName, dates] = Object.entries(month)[0];
                            return <Month key={monthName} month={monthName}>
                                {dates.map(date => {
                                    return <Day key={date.date} day={date.date}>
                                        {date.workouts.map(workout => {
                                            return (
                                                <div key={workout._id} className="info-container">
                                                    <h3 className="info-workout-name">{workout.workoutName}</h3>
                                                    <button className="info-workout-btn" onClick={() => setCurrentWorkout(workout)}>Details</button>
                                                </div>
                                            )
                                        })}
                                    </Day>
                                })}
                            </Month> 
                        })}
                    </Year>
                })}
            </div>

            <CurrentWorkout workout={currentWorkout}/>
        </div>
    )
};

export default Workouts;