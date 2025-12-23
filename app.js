const express = require('express');
const path  = require('path');

const bodyParser = require('body-parser');
const { userRouter} = require('./Router/user_router');
const { hostRouter} = require('./Router/host_router');

const rootDir = require('./utils/rotdir');

const app = express();

app.use(bodyParser.urlencoded());

app.get('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views','base_home.html'));
})

app.use( '/user', userRouter);
app.use( '/host', hostRouter);


app.use('/', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'the404.html'));
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    console.log('Root Directory: ', rootDir);  
    console.log(__dirname);
})