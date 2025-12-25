const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/rotdir');

router.get('/home', (req, res, next)=>{

    // res.sendFile(path.join(rootDir, 'views', 'host_home.html'));
    res.render('host_home');
})

router.get('/addhome', (req, res, next)=>{

    // res.sendFile( path.join(rootDir, 'views', 'host_add_home_get.html') );
    res.render('host_add_home_get');
})

const registeredHome = [];

router.post('/addhome', (req, res, next)=>{

    registeredHome.push(req.body);
    // res.sendFile( path.join(rootDir, 'views', 'host_add_home_post.html') );
    res.render('host_add_home_post');
})

module.exports = { hostRouter : router, registeredHome: registeredHome};