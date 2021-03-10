const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const userValidator = require('../validation/userValidation');
const { SALT_ROUNDS, SECRET } = require('../config/config');

const register = async data => {
    let name = userValidator.nameValidation(data.name);
    let username = userValidator.usernameValidation(data.username);
    let email = userValidator.emailValidation(data.email);
    let password = userValidator.passwordValidation(data.password);
    
    if(password !== data.repPassword) {
        throw { message: 'Passwords must match!' };
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const newUser = new User({name, username, email, password: hash});

    let token = jwt.sign({id: newUser._id, username: newUser.username}, SECRET);

    await newUser.save();

    return token;
};

const login = data => {

};

module.exports = {
    register,
    login,
}