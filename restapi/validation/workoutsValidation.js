const nameValidation = name => {
    if(!name || name == '') {
        throw { errorMsg: 'Name field must be filled!' }
    }

    return name;
}

const numberValidation = number => {
    const regEx = /^\d+$/;

    if(!regEx.test(number)) {
        throw { errorMsg: 'Weight field must contain a number!' };
    }

    if(Number(number) < 0) {
        throw { errorMsg: 'Weight field must be a positive number!' };
    }

    return number;
}

module.exports = {
    nameValidation,
    numberValidation,
}