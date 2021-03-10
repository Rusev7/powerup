const router = require('express').Router();

const { COOKIE_NAME } = require('../config/config');

const authServices = require('../services/authService');

router.post('/register', (req, res) => {
    authServices.register(req.body)
        .then(token => {
            res.cookie(COOKIE_NAME, token);
            res.status(201).json({ message: 'Successful registration!', type: 'success' });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

router.post('/login', (req, res) => {
    authServices.login(req.body)
        .then(token => {
            res.cookie(COOKIE_NAME, token);
            res.status(200).json({ message: 'You logged in successfully!', type: 'success' });
        })
        .catch(err => {
            res.status(400).json({ message: err, type: 'error' });
        });
});

module.exports = router;