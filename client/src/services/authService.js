const url = `https://evening-coast-86301.herokuapp.com/auth`;
const devUrl = `http://localhost:5000/auth`;


export const register = data => {
    return fetch(`${devUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const login = data => {
    return fetch(`${devUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const updateData = (data, userId) => {
    return fetch(`${devUrl}/change-user-data/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

export const checkEmail = email => {
    return fetch(`${devUrl}/check-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email}),
    })
}

export const resetPassword = data => {
    return fetch(`${devUrl}/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const resetProgress = userId => {
    return fetch(`${devUrl}/reset-progress/${userId}`);
}