const url = `http://localhost:5000/auth`;

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

export const resetProgress = userId => {
    return fetch(`${url}/reset-progress/${userId}`);
}