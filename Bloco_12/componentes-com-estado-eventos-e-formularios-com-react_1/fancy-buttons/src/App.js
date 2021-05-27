import React from 'react';
import './App.css';

class Buttons extends React.Component {
  constructor() {
    super()
    
    this.button1 = this.button1.bind(this)
    this.button2 = this.button2.bind(this)
    this.button3 = this.button3.bind(this)

    this.state = {
    numeroDeCliques1: 0,
    numeroDeCliques2: 0,
    numeroDeCliques3: 0,
    backgroundColor: 'green',
    height: '100px',
  }
  }

  button1(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
    if ((this.state.numeroDeCliques1 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'blue';
    } else {
      event.target.style.backgroundColor = 'rgb(0, 255, 255)'
    }
    }
    
  button2(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
    if ((this.state.numeroDeCliques2 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'blue';
    } else {
      event.target.style.backgroundColor = 'rgb(0, 255, 255)'
    }
    }
    
  button3(event) {
    this.setState((estadoAnterior) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    if ((this.state.numeroDeCliques3 + 1) % 2 === 0) {
      event.target.style.backgroundColor = 'blue';
    } else {
      event.target.style.backgroundColor = 'rgb(0, 255, 255)'
    }
    }

  render() {
    return (
      <div>
        <h1 className='header'>Meus Botões em React</h1>
      <div className='botao'>
        <button className='buttons' onClick={this.button1}>{this.state.numeroDeCliques1}</button>
        <button className='buttons' onClick={this.button2}>{this.state.numeroDeCliques2}</button>
        <button className='buttons' onClick={this.button3}>{this.state.numeroDeCliques3}</button>
      </div>
      </div>
      );
  }
}

export default Buttons;  
