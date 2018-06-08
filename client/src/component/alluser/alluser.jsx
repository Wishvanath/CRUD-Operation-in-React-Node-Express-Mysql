import React from 'react';

class AllUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }
// define the get details button functionality
btn_get_details = (e) =>{
    e.preventDefault();
    console.log("you have clicked te get details button");
    // make a http request 
    var request = new Request('http://localhost:5000/alluser',{
        method:'GET',
        headers: new Headers({'Content-Type':'application/json'})

    });
    fetch(request)
        .then(res => res.json())
        .then(data => this.setState({data:data}));
}// end of btn get_details functionality

// btn delete functionality
btn_delete(user_id){
    let user_data ={
        id: user_id
       
    }
    // make a http request
    var request = new Request('http://localhost:5000/delete',{
        method:'DELETE',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(user_data)
    });
    // fetch request
    fetch(request)
        .then(res => res.json())
        .then(data => console.log(data))
}
    render() {
        let state_data = this.state.data;
        return (
            <div>
                <h2>Details of All User</h2>
                <button onClick={this.btn_get_details}>Get Details</button>
                <hr/>
                {/* {JSON.stringify(state_data)} */}
                <table>
                    <thead>
                       <tr>
                            <th>S.NO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                       </tr>
                    </thead>
                    <tbody>
                        {state_data.map(data =>
                        <tr key={data.Id} data={data}>
                            <td>{data.Id}</td>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td>{data.Password}</td>
                            <td><button onClick={this.btn_delete.bind(this,data.Id)}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default AllUser;
