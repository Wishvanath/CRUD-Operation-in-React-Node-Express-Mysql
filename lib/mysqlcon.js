// to load my sql module
const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'BloodDonation'
});

// create connection
con.connect(function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Database is connected");
    }
});

// export this module to use the connection variable in another moduel
module.exports = con;