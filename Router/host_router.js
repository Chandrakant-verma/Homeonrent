const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/rotdir');
const { host_home, host_add_home_get, host_add_home_post, registeredHome} = require('../controller.js/host_controller');


router.get('/home', host_home );

router.get('/addhome', host_add_home_get);

router.post('/addhome', host_add_home_post );

module.exports = { hostRouter : router, registeredHome: registeredHome};