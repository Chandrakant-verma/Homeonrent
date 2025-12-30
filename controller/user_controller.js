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

const getDetails = ( req, res, next) => {

    const homeId = parseInt(req.params.id);

    const newHome = new Home();

    const h = newHome.get();

    const homeDetails = h.find(home => home.id === homeId);

    res.render('home_details', {home: homeDetails});
}

module.exports = { userHome: userHome, getList: getList, getDetails: getDetails};