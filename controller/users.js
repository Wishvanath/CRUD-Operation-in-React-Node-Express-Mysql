// import the databse module
const con = require('../lib/mysqlcon');
module.exports = {
    // define the newuser route 
    newuser:function(req,res){
        // fetch the data
        // let Name = req.body.Name;
        // let Email = req.body.Email;
        // let Password = req.body.Password;
        // // first method
        // con.query(`INSERT INTO newuser(Name,Email,Password) values('${Name}','${Email}','${Password}')`,function(err,result,fields){
        //     if(err){
        //         throw err;
        //     }
        //     else{
        //         res.send(JSON.stringify(result));
        //         console.log("Data Inserted Successfully");
        //     }
        // });

        // second method
        let userData ={
            Name:req.body.Name,
            Email:req.body.Email,
            Password:req.body.Password
        };
        
        con.query("INSERT INTO newuser SET ?",userData,function(err,resutl,fields){
            if(err) throw err;
            res.send(JSON.stringify(resutl));
            console.log("Data Inserted Successfully");
        });
    },// end of new user route

    // alluser:function(req,res){
    //     res.send("response from all user route");
    // }
    alluser: (req,res) => {
        // make a query to fetch the all data from the table 
        con.query('SELECT * FROM `newuser`',function(err,result,fields){
            if(err){
                throw err;
            }
            else{
                res.send(JSON.stringify(result));
                // console.log(JSON.stringify(result));
            }
        });
    },// end of all user 

    // define the update user functionality
    updateuser: (req, res) => {
        // let update_data ={
        //     Id: req.body.Id,
        //     Name:req.body.Name,
        //     Email:req.body.Email,
        //     Password:req.body.Password
        // };
        // console.log(update_data);
        // fetch the individual data from the form
        let Id = req.body.Id;
        let Name = req.body.Name;
        let Email = req.body.Email;
        let Password = req.body.Password;
        // wirte the sql query to update the database
        con.query(`UPDATE newuser SET Name = '${Name}', Email = '${Email}', Password = '${Password}' WHERE newuser.Id = '${Id}' `,function(err,result,fields){
            if(err){
                throw new Error("Bad Response from the Server");

            }
            else{
                res.send(JSON.stringify(result));
                console.log("Data is updated");
            }
        });

    },// End of update user 

    // delete user functionality
    deleteuser: function(req,res){
        // fetch the particular id from the react form
        let del_id = req.body.id;
        
        // fetch the data from the database
        con.query(`DELETE FROM newuser WHERE newuser.Id = ${del_id}`,function(err,result,fields){
            if(err){
                throw err;

            }
            else{
                console.log(JSON.stringify(result));
            }
            
        })
    }// end of delete user functionality

}