const url = `http://localhost:5000/workouts`;

export const createWorkout = (data, userId) => {
    const dataBody = {
        workoutName: data.workoutName,
        personalWeight: data.personalWeight,
        userId,
    }

    return fetch(`${url}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    });
}

export const pushExercise = data => {
    const dataBody = {};

    
}