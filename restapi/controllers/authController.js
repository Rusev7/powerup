const router = require('express').Router();

const authServices = require('../services/authService');

router.post('/register', (req, res) => {
    authServices.register(req.body)
        .then(token => {
            console.log('Successfully created user!');
            console.log(token);
        })
        .catch(err => {
            console.log(err);
        });
});

router.post('/login', (req, res) => {

});

module.exports = router;