//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb');
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('err',err);
    }
})

//port
const port = 3000;

//cors
app.use(cors());

//bodyparser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',route);

//testing server
app.get('/',(req,res)=>{
    res.send('checked');
})

app.listen(port,()=>{
    console.log('Server started at port:'+port);
})