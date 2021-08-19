import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      buttonOne: 0,
      buttonTwo: 0,
      buttonThree: 0,
    }

  this.eventButtomOne = this.eventButtomOne.bind(this)
  this.eventButtomTwo = this.eventButtomTwo.bind(this)
  this.eventButtomThree = this.eventButtomThree.bind(this)

  }

    eventButtomOne(evento) {
      this.setState((estadoInicial) => ({
        buttonOne: estadoInicial.buttonOne + 1
      }))
      if((this.state.buttonOne + 1) % 2 === 0) {
      evento.target.style.backgroundColor = 'green'
      } else {
      evento.target.style.backgroundColor = 'rgb(255, 127, 80)'
      }
    }
    
    eventButtomTwo(evento) {
      this.setState((estadoInicial) => ({
        buttonTwo: estadoInicial.buttonTwo + 1
      }))
      if((this.state.buttonTwo + 1) % 2 === 0) {
        evento.target.style.backgroundColor = 'green'
      } else {
        evento.target.style.backgroundColor = 'rgb(255, 127, 80)'
      }
    }
    
    eventButtomThree(evento) {
      this.setState((estadoInicial) => ({
        buttonThree: estadoInicial.buttonThree + 1
      }))
      if((this.state.buttonThree + 1) % 2 === 0) {
        evento.target.style.backgroundColor = 'green'
      } else {
        evento.target.style.backgroundColor = 'rgb(255, 127,)'
      }
    }
    
  render() {
    return (
    <div className='buttons'>
      <button className='button' onClick={this.eventButtomOne}>{this.state.buttonOne}</button>
      <button className='button' onClick={this.eventButtomTwo}>{this.state.buttonTwo}</button>
      <button className='button' onClick={this.eventButtomThree}>{this.state.buttonThree}</button>
    </div>
      );
  }
}

export default App;
