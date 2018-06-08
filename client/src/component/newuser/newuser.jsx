import React from 'react';
import './newuser.css';
class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            Email:"",
            Password:"",
            title:"SIGN UP FORM"

        };
    }
// define the btn submit
btn_submit = (e) =>{
    e.preventDefault();
    console.log("You have clicked the submit btn");
    var user_data ={
        Name:this.refs.txt_name.value,
        Email:this.refs.txt_email.value,
        Password:this.refs.txt_password.value
    };
    console.log(JSON.stringify(user_data));

    // make a http request
    var request = new Request('http://localhost:5000/newuser',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user_data)
    });
    fetch(request)
        .then(function(res){
            if(res.status >= 400){
                throw new Error("Bad Response through the Server");
            }
        })
        .then(function(data){
            console.log(data);
        });
}// end of btn submit 
    render() {
        let title = this.state.title;
        return (
            <div className="signup_form">
                <h3>{title}</h3>
                <hr/>
                <input type="text" placeholder="Name:" ref="txt_name" className="user_input"/><br/>
                <input type="text" placeholder="Email" ref="txt_email" className="user_input"/><br/>
                <input type="text" placeholder="Password" ref="txt_password" className="user_input"/><br/>
                <input type="submit" value="Submit" className="btn_submit" onClick={this.btn_submit}/>
            </div>
        );
    }
}

export default NewUser;
