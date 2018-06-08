import React, { Component } from 'react';
import './App.css';
import NewUser from './component/newuser/newuser';
import UpdateUser from './component/updateuser/updateuser';
import AllUser from './component/alluser/alluser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Blood Donation Camp</h2>
        <NewUser />
        <hr/>
        <UpdateUser />
        <hr/>
        <AllUser/>
      </div>
    );
  }
}

export default App;
