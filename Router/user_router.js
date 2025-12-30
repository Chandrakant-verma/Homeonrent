const express = require('express');
const router = express.Router();

const {userHome} = require('../controller/user_controller');
const {getList} = require('../controller/user_controller');
const {getDetails} = require('../controller/user_controller');

router.get('/', userHome);

router.get('/home_list', getList);

router.get('/:id', getDetails )

module.exports = { userRouter : router};