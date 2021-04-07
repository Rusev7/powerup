import { useState } from 'react';

import './CurrentWorkout.css';

const CurrentWorkout = ({
    workout
}) => {
    const [currentExercise, setCurrentExercise] = useState(null);

    if(!workout) {
        return null;
    } else {
        let date = new Date(workout.date);
        date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        return (
            <div className="workout-container">
                <h1 className="workout-container-name">{workout.workoutName}</h1>
                <h2 className="workout-container-date">{date}</h2>
                <h3 className="workout-container-weight">Weight: {workout.personalWeight}kg</h3>
                <div className="workout-exercises-container">
                    <div className="exercises-list-container">
                        <h2 className="exercises-list-heading">Exercises:</h2>
                        {workout.exercises.map((exercise, index) => {
                            return (
                                <div key={index} className="exercise-list-item">
                                    <span  className="exercise-list-item-text">&#10146; {exercise.name}</span>
                                    <button type="button" onClick={() => setCurrentExercise(workout.exercises[index])} className="exercise-list-item-btn">details</button>
                                </div>
                            )
                        })}
                    </div>
                    {currentExercise && <div className="current-exercise-container">
                        <h3 className="current-exercise-heading">{currentExercise.name}</h3>
                        {currentExercise.sets.map((set, index) => (
                            <div key={index + 10} className="current-exercise-set-row">
                                <span className="current-exercise-info">Set {index + 1}:</span>
                                <span className="current-exercise-info">Reps: {set.reps}</span>
                                <span className="current-exercise-info">Weight: {set.weight}</span>
                            </div>
                        ))}
                    </div>}
                    
                </div>

                <div className="rating-desc-container">
                        {workout.rating && 
                            <>
                                <h3 className="workout-container-weight">Rating:</h3>
                                <img src={`/rating-${workout.rating}.png`} alt="rating emoji" className="workout-emoji"/> 
                            </>
                        }

                        {workout.description && 
                            <>
                                <h3 className="workout-container-weight">Description:</h3>
                                <p className="workout-description">{workout.description}</p> 
                            </>
                        }
                </div>
            </div>
        )
    }
};

export default CurrentWorkout;