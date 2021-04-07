const url = `https://evening-coast-86301.herokuapp.com/workouts`;
const devUrl = `http://localhost:5000/workouts`;

export const createWorkout = (data, userId) => {
    const dataBody = {
        workoutName: data.workoutName,
        personalWeight: data.personalWeight,
    }

    return fetch(`${devUrl}/create/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataBody)
    });
}

export const pushExercise = data => {
    return fetch(`${devUrl}/add-exercise`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const pushDescriptionAndRating = data => {
    return fetch(`${devUrl}/add-desc-rating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const getWorkotus = userId => {
    return fetch(`${devUrl}/get-workouts/${userId}`);
}