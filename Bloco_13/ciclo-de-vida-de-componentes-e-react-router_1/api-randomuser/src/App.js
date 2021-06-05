import React from 'react';
import Persons from './Persons';
import Loading from './Loading';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      users: [],
      loading: true,
    }

    this.fetchRandoMuser = this.fetchRandoMuser.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  fetchRandoMuser() {
    fetch('https:api.randomuser.me/')
    .then((response) => response.json())
    .then((data) => {
      this.setState({ 
        users: data.results,
        loading: false, 
      })
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const idade = 50;
    if (nextState.users[0].dob.age > idade) {
      return false;
    }
    return true;
  }

  componentDidMount(){
    this.fetchRandoMuser();
  }

  getUserInfo(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {

    const { users, loading } = this.state;

    if(loading) return <Loading />

    return (
      <div className='App'>
        <h1>
          Api Random User by React
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
