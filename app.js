// load express module
const express = require('express');
// load the databse connection
const con = require('./lib/mysqlcon'); 
// load the body parser module
const bodyParser = require('body-parser');
// load the controller module
const userTask = require('./controller/users');

// create express app instance
const app = express();

// apply middle ware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// defne the route handler
app.post('/newuser',userTask.newuser);

// define all user route handler
app.get('/alluser',userTask.alluser);


// to update the user details 
app.put('/update', userTask.updateuser);

// to delete the user
app.delete('/delete',userTask.deleteuser);

// create a express server
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Port listening on ${PORT}`));