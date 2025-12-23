const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/rotdir');

console.log(__dirname, "ho gaya");

router.get('/', (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir, 'views', 'user_home.html'));
})

module.exports = { userRouter : router};