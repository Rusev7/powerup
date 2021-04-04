const router = require('express').Router();

const workoutService = require('../services/workoutsService');

router.post('/create', (req, res) => {
    workoutService.create(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully created workout!', workoutId: data._id });
        })
        .catch(err => console.log(err));
});

router.post('/add-exercise', (req, res) => {
    workoutService.pushExercise(req.body)
        .then(data => {
            res.status(201).json({ message: 'Successfully added exercise!' });
        });
});

router.get('/get-workouts', (req, res) => {
    // workoutService.getAll(req.user.id);
    console.log(req);
    workoutService.getAll('60646e784ed576062ca61187')
        .then(workouts => {
            res.status(200).json({ message: 'Successfully fetched workouts!', workouts });
        })
});

module.exports = router;