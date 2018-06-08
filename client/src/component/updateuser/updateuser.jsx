import React from 'react';
import './updateuser.css';
class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:"",
            Email:"",
            Password:"",
            title:"UPDATE FORM"
            

        };
    }
// define the btn submit
btn_submit= (e) =>{
    e.preventDefault();
    console.log("you have clicked the update button");
    let update_data ={
        Id: this.refs.txt_id.value,
        Name: this.refs.txt_name.value,
        Email: this.refs.txt_email.value,
        Password: this.refs.txt_password.value
    };
    console.log(JSON.stringify(update_data));
    // make a http request 
    var request = new Request('http://localhost:5000/update',{
        method:'PUT',
        headers: {'Content-type': 'application/json'},
        body:JSON.stringify(update_data)
    });
    fetch(request)
        .then(function(res){
            if(res.status >= 400){
                throw new Error("Bad Response through the server");
            }
        })
        .then(function(data){
            console.log(data);
        })
}
    render() {
        let title = this.state.title;
        return (
            <div className="update_form">
                <h3>{title}</h3>
                <hr/>
                <input type="text" placeholder="ID:" ref="txt_id" className="user_input"/><br/>
                <input type="text" placeholder="Name:" ref="txt_name" className="user_input"/><br/>
                <input type="text" placeholder="Email" ref="txt_email" className="user_input"/><br/>
                <input type="text" placeholder="Password" ref="txt_password" className="user_input"/><br/>
                <button type="submit" value="Submit" className="btn_submit" onClick={this.btn_submit}>Update</button>
            </div>
        );
    }
}

export default UpdateUser;
