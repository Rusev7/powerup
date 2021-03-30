import './CurrentWorkout.css';

const CurrentWorkout = ({
    workout
}) => {
    if(!workout) {
        return null;
    } else {
        let date = new Date(workout.date);
        date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        console.log(workout);

        return (
            <form className="workout-container">
                <h1 className="workout-container-name">{workout.workoutName}</h1>
                <h2 className="workout-container-date">{date}</h2>
                <h3 className="workout-container-weight">Weight: {workout.personalWeight}kg</h3>
                <div className="workout-exercises-container">
                    <div className="exercises-list-container">
                        <h2 className="exercises-list-heading">Exercises:</h2>
                        {workout.exercises.map((exercise, index) => {
                            return (
                                <span key={index} className="exercise-list-item">&#10146; {exercise.name}</span>
                            )
                        })}
                    </div>
                    <div className="current-exercise-container">

                    </div>
                </div>
            </form>
        )
    }
};

export default CurrentWorkout;