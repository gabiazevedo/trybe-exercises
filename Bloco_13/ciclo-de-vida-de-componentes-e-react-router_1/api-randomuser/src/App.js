import React from 'react';
import Persons from './Persons';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      users: [],
    }

    this.fetchRandoMuser = this.fetchRandoMuser.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  fetchRandoMuser() {
    fetch('https:api.randomuser.me/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({ users: data.results })
    });
  }

  componentDidMount(){
    this.fetchRandoMuser();
  }

  getUserInfo(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.age,
      image: user.picture.thumbnail,
    };
  }
  render() {

    const { users } = this.state;

    return (
      <div className='App'>
        <h1>
          Api Rando Muser by React
        </h1>
          <div>
            {users.map((user, index) => (
              <Persons key={ index } users={ this.getUserInfo(user) } />))} 
          </div>
      </div>
      );
  }
}

export default App;
