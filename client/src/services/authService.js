const url = `https://evening-coast-86301.herokuapp.com/auth`;

export const register = data => {
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export const login = data => {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const updateData = (data, userId) => {
    return fetch(`${url}/change-user-data/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

export const checkEmail = email => {
    return fetch(`${url}/check-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email}),
    })
}

export const resetPassword = data => {
    return fetch(`${url}/reset-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}

export const resetProgress = userId => {
    return fetch(`${url}/reset-progress/${userId}`);
}