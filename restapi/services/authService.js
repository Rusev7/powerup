const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const userValidator = require('../validation/userValidation');
const { SALT_ROUNDS, SECRET } = require('../config/config');

const register = async data => {
    let username = userValidator.usernameValidation(data.username);
    let email = userValidator.emailValidation(data.email);
    let password = userValidator.passwordValidation(data.password);
    let registrationDate = new Date;
    
    if(password !== data.passwordRep) {
        throw { errorMsg: 'Passwords must match!' };
    }

    let salt = await bcrypt.genSalt(SALT_ROUNDS);
    let hash = await bcrypt.hash(password, salt);

    const newUser = new User({username, email, password: hash, registrationDate});

    let token = jwt.sign({id: newUser._id, username: newUser.username}, SECRET);

    await newUser.save();

    return token;
};

const login = async data => {
    let email = userValidator.emailValidation(data.email);
    let password = userValidator.passwordValidation(data.password);
    let errorMsg = 'Invalid email / password!';

    let user = await User.findOne({email});
    if(!user) throw { errorMsg };

    let passwordCheck = await bcrypt.compare(password, user.password);
    if(!passwordCheck) throw { errorMsg };
    
    let token = jwt.sign({id: user._id, username: user.name}, SECRET);

    return token;
};

module.exports = {
    register,
    login,
}