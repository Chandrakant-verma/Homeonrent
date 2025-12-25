const express = require('express');
const router = express.Router();

const {userHome} = require('../controller.js/user_controller');

router.get('/', userHome);

module.exports = { userRouter : router};