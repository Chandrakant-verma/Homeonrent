const express = require('express');
const path  = require('path');

const bodyParser = require('body-parser');
const { userRouter} = require('./Router/user_router');
const { hostRouter} = require('./Router/host_router');

const rootDir = require('./utils/rotdir');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded());

app.get('/', (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views','base_home.html'));

    res.render('base_home');
})

app.use( '/user', userRouter);
app.use( '/host', hostRouter);

app.use( express.static(path.join(rootDir, 'public')));

app.use('/', (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'the404.html'));

    res.render('the404');
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})