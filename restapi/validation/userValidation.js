const lengthValidator = (type, string, minLength) => {
    if(string.length < minLength) {
        throw { message: `${type} should be at least ${minLength} charachters long!` };
    }
}

const checkEmpty = (type, string) => {
    if(!string || string == '') {
        throw { message: `${type} field must be filled!` };
    }
}

const emailValidation = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    checkEmpty('Email', email);

    if(!regex.test(email)) {
        throw { message: 'Invalid email!' }
    }

    return email;
};

const usernameValidation = uname => {
    const minLength = 5;
    const regex = /^[a-zA-Z0-9]+$/;

    checkEmpty('Username', uname);

    if(!regex.test(uname)) {
        throw { message: 'Username should contain only english letters and numbers!' };
    }

    lengthValidator('Username', uname, minLength);

    return uname;
};

const nameValidation = name => {
    const minLength = 3;
    const regex = /^[a-zA-Z]+$/;

    checkEmpty('Name', name);

    if(!regex.test(name)) {
        throw { message: 'Name should contain only english letters!' };
    }

    lengthValidator('Name', name, minLength);

    return name;
}

const passwordValidation = pass => {
    const minLength = 8;

    checkEmpty('Password', pass)

    lengthValidator('Password', pass, minLength);

    return pass;
}

module.exports = {
    emailValidation,
    usernameValidation,
    nameValidation,
    passwordValidation,
}