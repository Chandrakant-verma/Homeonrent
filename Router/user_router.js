const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/rotdir');

const {registeredHome} = require('./host_router');

router.get('/', (req, res, next)=>{
    
    console.log('Registered Homes: ', registeredHome);
    res.render('user_home', { registeredHome: registeredHome  });
    
})

module.exports = { userRouter : router};