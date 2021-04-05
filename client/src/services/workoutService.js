const url = `http://localhost:5000/workouts`;

export const createWorkout = (data, userId) => {
    const dataBody = {
        workoutName: data.workoutName,
        personalWeight: data.personalWeight,
    }

    return fetch(`${url}/create/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    });
}

export const pushExercise = data => {
    return fetch(`${url}/add-exercise`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const getWorkotus = userId => {
    return fetch(`${url}/get-workouts/${userId}`);
}