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