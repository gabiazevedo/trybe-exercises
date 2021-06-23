import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;

    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
        </label>
        <input
          id="id-email" 
          type="email" 
          value={ email }
          onChange={ (e) => this.changeEmail(e.target.value) }
        />
      </div>  
    );
  }
}

export default App;
