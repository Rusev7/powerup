const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    workoutName: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    personalWeight: {
        type: Number
    },

    exercises: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Workout', workoutSchema);