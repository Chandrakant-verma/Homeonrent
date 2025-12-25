const express = require('express');
const {registeredHome} = require('../controller.js/host_controller');

const userHome = (req, res, next)=>{
    console.log('Registered Homes: ', registeredHome);
    res.render('user_home', { registeredHome: registeredHome  });
}

module.exports = { userHome: userHome};