export const nameValidation = (input, fieldName) => {
    const minLength = 3;

    if(input.length < minLength) {
        return {validated: false, errorMsg: `${fieldName} must be at least ${minLength} characters!` };
    }

    return {validated: true, input};
}

export const numberValidation = (input, fieldName) => {
    const min = 0;
    const regEx = /^\d+$/;

    if(!regEx.test(input)) {
        return {validated: false, errorMsg: `${fieldName} must be a number!` };
    } else {
        if(Number(input) < min) {
            return {validated: false, errorMsg: `${fieldName} can't be a negative number!` };
        }
    }

    return {validated: true, input};
}

export const exerciseWeightValidation = input => {
    const min = 0;
    const regEx = /^\d+$/;

    if(regEx.test(input)) {
        if(Number(input) < min) {
            return {validated: false, errorMsg: `Exercise weight must be at least ${min} kg/lbs!` };
        }
    } else {
        if(input.toLowerCase() !== 'bodyweight') {
            return {validated: false, errorMsg: `Exercise weight must be either BODYWEIGHT or a number!` };
        }
    }

    return {validated: true, input};
}

export const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!email || email === '') {
        return { validated: false, errorMsg: `Email field must be filled!` };
    }

    if(!regex.test(email)) {
        return { validated: false, errorMsg: 'Invalid email!' }
    }

    return {validated: true, input: email};
};

export const usernameValidation = uname => {
    const minLength = 5;
    const regex = /^[a-zA-Z0-9]+$/;

    if(!uname || uname === '') {
        return { validated: false, errorMsg: `Username field must be filled!` };
    }

    if(uname.length < minLength) {
        return { validated: false, errorMsg: `Username field should be at least ${minLength} charachters long!` };
    }

    if(!regex.test(uname)) {
        return { validated: false,  errorMsg: 'Username should contain only english letters and numbers!' };
    }

    return {validated: true, input: uname};
};

export const passwordValidation = pass => {
    const minLength = 8;

    if(!pass || pass === '') {
        return { validated: false, errorMsg: `Password field must be filled!` };
    }

    if(pass.length < minLength) {
        return { validated: false, errorMsg: `Password field should be at least ${minLength} charachters long!` };
    }

    return {validated: true, input: pass};
}