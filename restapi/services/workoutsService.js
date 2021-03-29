const Workout = require('../models/Workout');
const User = require('../models/User');
const { nameValidation, numberValidation } = require('../validation/workoutsValidation');

const create = async (data) => {
    let workoutName = nameValidation(data.workoutName);
    let date = new Date();
    let personalWeight = numberValidation(data.personalWeight);    

    let workout = new Workout({
        workoutName,
        date,
        personalWeight,
    });

    const user = await User.findById(data.userId);
    user.workouts.push(workout._id);

    await user.save();

    return await workout.save();
};

const pushExercise = async data => {
    let workoutId = data.id;

    let currWorkout = await Workout.findById(workoutId);

    let exerciseName = nameValidation(data.exerciseNname);
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