import React from 'react';
import Name from './components/Name';
import Email from './components/Email';
import CPF from './components/CPF';
import Address from './components/Address';
import City from './components/City';
import State from './components/State';
import RadioButton from './components/RadioButton';
import Resume from './components/Resume';
import Position from './components/Position';
import JobDescription from './components/JobDescription';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  addressType: '',
  textarea: '',
  position: '',
  jobDescription: '',
  submit: false,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.handlerGenerico = this.handlerGenerico.bind(this);
    this.toUpperCaseFunction = this.toUpperCaseFunction.bind(this);
    this.sendForm = this.sendForm.bind(this);

    this.state = initialState;
  }

  toUpperCaseFunction(string) {
    return string.toUpperCase();
  }

  handlerGenerico({ target }) {
  const { name } = target;

    let value = (target.type === 'checkbox') ? target.checked : target.value;

    value = (name === 'name') ? this.toUpperCaseFunction(value) : value; 
    
    this.setState({
      [name]: value,
    })
  }

  onBlurHandler = (event) => {

    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState({
      [name]: value,
    })
  };

  sendForm() {
    this.setState({
      submit: true,
    })
  }

  resetForm = () => {
    this.setState(initialState);
  }

  render() {

    return (
      <form>
        <h1>Work with us!</h1>
          <fieldset>
            <legend>Personal Data</legend>
              <div className="name-email">
                <Name name={ this.state.name } handlerGenerico={ this.handlerGenerico } />
                <Email email={ this.state.email } handlerGenerico={ this.handlerGenerico } />
                <CPF cpf={ this.state.cpf } handlerGenerico={ this.handlerGenerico } />
                <Address address={ this.state.address } handlerGenerico={ this.handlerGenerico } />
                <City city={ this.state.city } handlerGenerico={ this.handlerGenerico } onBlurHandler={ this.onBlurHandler } />
                <State state={ this.state.state } handlerGenerico={ this.handlerGenerico } />
                <RadioButton addressType={ this.state.addressType } handlerGenerico={ this.handlerGenerico } />
              </div>
          </fieldset>
          <fieldset>
            <legend>Data of your last job</legend>
              <div>
                <Resume textarea={ this.textarea } handlerGenerico={ this.handlerGenerico } />
                <Position position={ this.position } handlerGenerico={ this.handlerGenerico } />
                <JobDescription jobDescription={ this.jobDescription } handlerGenerico={ this.handlerGenerico } />
              </div>
          </fieldset>
          <div>
            <Button variant="outline-success" type='submit'onClick={ this.sendForm }>Enviar</Button>
            <Button variant="outline-danger" type="reset" onClick={ this.resetForm }>Limpar</Button>
          </div>
      </form>
    );
  }
}

export default App;
