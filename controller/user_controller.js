const express = require('express');
const { Home } = require('../models/home');

const userHome = (req, res, next)=>{
    
    // const newHome = new Home();

    // const h = newHome.get();

     const h = Home.fetchAll().then( ([rows, cols]) => {
        return rows;
    } );


    res.render('user_home', { registeredHome: h  });
}

const getList = async ( req, res, next) => {
    
    // const newHome = new Home();

    // const h = newHome.get();

    const h = await Home.fetchAll().then( ([rows, cols]) => {

        console.log('rows in list is : ', rows);
        console.log(JSON.stringify(rows));
        return rows;
    } );

    res.render('home_list', { registeredHome: h  });
}

const getDetails = async ( req, res, next) => {

    const homeId = parseInt(req.params.id);

    const newHome = new Home();

    // const h = newHome.get();

    // const homeDetails = h.find(home => home.id === homeId);

    const h = await Home.fetchAll().then( ([rows, cols]) => {
        return rows;
    } );

    const homeDetails = h.find(home => home.id === homeId);

    if( !homeDetails ){
        res.render('the404');
    }
    else{
           res.render('home_details', {home: homeDetails});
    }

    
}

module.exports = { userHome: userHome, getList: getList, getDetails: getDetails};

