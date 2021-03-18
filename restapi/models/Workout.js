const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    weight: {
        type: Number
    },

    exercises: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Workout', workoutSchema);