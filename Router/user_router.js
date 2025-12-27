const express = require('express');
const router = express.Router();

const {userHome} = require('../controller.js/user_controller');
const {getList} = require('../controller.js/user_controller');

router.get('/', userHome);

router.get('/home_list', getList);

module.exports = { userRouter : router};