const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/rotdir');

router.get('/home', (req, res, next)=>{

    console.log(req.body);

    res.sendFile(path.join(rootDir, 'views', 'host_home.html'));
})

router.get('/addhome', (req, res, next)=>{

    console.log(req.body);

    res.sendFile( path.join(rootDir, 'views', 'host_add_home_get.html') );
})

router.post('/addhome', (req, res, next)=>{

    console.log(req.body);

    res.sendFile( path.join(rootDir, 'views', 'host_add_home_post.html') );
})

module.exports = { hostRouter : router};