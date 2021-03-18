const Workout = require('../models/Workout');
const User = require('../models/User');
const { nameValidation, numberValidation } = require('../validation/workoutsValidation');

const create = async (data, userId) => {
    let workoutName = nameValidation(data.name);
    let date = new Date();
    let weight = numberValidation(data.weight);
    
    let workout = new Workout({
        name: workoutName,
        date,
        weight,
    });

    const user = await User.findById(userId);
    user.workouts.push(workout._id);

    await user.save();

    return await workout.save();
};

const pushExercise = async data => {
    let workoutId = data.id;

    let currWorkout = await Workout.findById(workoutId);

    let exerciseName = nameValidation(data.name);
    let sets = [];

    Object.keys(data).slice(2).forEach(dataElement => {
        if(!dataElement.includes('W')) {
            sets.push({reps: data[dataElement]});
        } else {
            sets[sets.length - 1].weight = data[dataElement];
        }
    })

    currWorkout.exercises.push({
        name: exerciseName,
        sets
    })

    return await currWorkout.save();
};

const getAll = async userId => {
    const user = await User.findById(userId).populate('workouts');

    console.log(user);

    return user.workouts;
};

module.exports = {
    create,
    pushExercise,
    getAll,
}