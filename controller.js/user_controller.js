const express = require('express');
const { Home } = require('../models/home');

const userHome = (req, res, next)=>{
    
    const newHome = new Home();

    const h = newHome.get();

    res.render('user_home', { registeredHome: h  });
}

const getList = ( req, res, next) => {
    
    const newHome = new Home();

    const h = newHome.get();

    res.render('home_list', { registeredHome: h  });
}

module.exports = { userHome: userHome, getList: getList};