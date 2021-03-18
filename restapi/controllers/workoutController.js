const router = require('express').Router();

const workoutService = require('../services/workoutsService');

router.post('/create', (req, res) => {
    workoutService.create(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully created workout!', workoutId: data._id });
        });
});

router.post('/add-exercise', (req, res) => {
    workoutService.pushExercise(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully added exercise!' });
        });
});

module.exports = router;