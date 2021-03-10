const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
        minLength: 8,
    },

    age: {
        type: Number,
        min: 10,
        max: 90
    },

    height: {
        type: Number
    },

    weigth: {
        type: Number
    }

});

module.exports = mongoose.model('User', userSchema)