const routes = require('express').Router();
const {
    userSignup
} = require('../controller/user_controller');

routes.post('userSignup', userSignup)