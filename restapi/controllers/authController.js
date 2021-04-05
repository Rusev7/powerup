const router = require('express').Router();

const { COOKIE_NAME } = require('../config/config');

const authServices = require('../services/authService');

router.post('/register', (req, res) => {
    authServices.register(req.body)
        .then(data => {
            res.cookie(COOKIE_NAME, data.token, { httpOnly: false });
            res.status(201).json({ message: 'Successful registration!', type: 'success', user: {id: data.user._id, username: data.user.username }});
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/login', (req, res) => {
    authServices.login(req.body)
        .then(data => {
            res.cookie(COOKIE_NAME, data.token, { httpOnly: false });
            res.status(200).json({ message: 'You logged in successfully!', type: 'success', user: {id: data.user._id, username: data.user.username, email: data.user.email }});
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/change-user-data/:userId', (req, res) => {
    authServices.changeData(req.body, req.params.userId)
        .then(() => {
            res.status(200).json({ message: 'Info changed successfully!', type: 'success' });
        })  
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' })
        })
});

router.get('/reset-progress/:userId', (req, res) => {
    authServices.resetProgress(req.params.userId)
        .then(() => {
            res.status(200).json({ message: 'Workout progress reseted successfully!', type: 'success' })
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        })
});

module.exports = router;