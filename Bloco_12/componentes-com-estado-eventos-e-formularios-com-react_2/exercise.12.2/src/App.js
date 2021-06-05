import React from 'react';
import './App.css';
import Nome from './Nome';
import Email from './Email';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      textarea: '',
      dropdown: '',
      default: 'Deixe sua opinião aqui',
      news: false,
      formularioComErros: false,
    }
  this.handlerGenerico = this.handlerGenerico.bind(this)
  this.checkInputs = this.checkInputs.bind(this)
  
  }

  handlerGenerico({ target }) {

    const { name } = target
    const value = (target.type === 'checkbox') ? target.checked : target.value

  this.setState({
    [name]: value
  })
  this.checkInputs(name, value);
  }

  formWithErrors = (bool) => { this.setState({ formularioComErros: bool })};

  checkInputs(name, value) {
    const { formWithErrors } = this;

    switch(name) {
      case 'nome':
        const nomeInvalido = !(value.length >= 3);
        formWithErrors(nomeInvalido);
        break;
      case 'email':
        const emailInvalido = !(value.includes('@'));
        formWithErrors(emailInvalido);
        break;
      case 'textarea':
        const textareaInvalido = !(value.length > 0);
        formWithErrors(textareaInvalido);
        break;
      case 'dropdown':
        const dropDown = !(value.length > 0);
        formWithErrors(dropDown);
        break;
      case 'news':
        formWithErrors(!value);
        break;
      default:
        console.error('Formulário com erro de preenchimento');
        break;
    }
  }

  render() {
    const { formWithErrors } = this.state;
    return (
    <div className='divMae'>
      <div className='paragrafo'>
        <h1>Preencha nosso Formulário</h1>
        <h2>Workshop Panc's -Plantas Alimentícias Não Convencionais</h2>
      </div>
        <form className='form'> 
          <fieldset className='fieldset1'>
          <div className='inputs'>
            <Nome nome={ this.state.nome } handlerGenerico={ this.handlerGenerico }/>
            <Email email={ this.state.email } handlerGenerico={ this.handlerGenerico }/>
          </div>
          </fieldset>
          <fieldset className='fieldset2'>
            <legend>Sugestões e críticas</legend>
          <div>
              <textarea 
                type='textarea'
                name='textarea'
                cols='90'
                rows='8'
                value={this.state.textarea}
                onChange={this.handlerGenerico} 
                />
          </div>
          </fieldset>
          <fieldset className='fieldset3'>
          <div className='select'>
            <label>
            Marque sua opinião
              <select
                className='dropdown' 
                type='dropdown'
                name='dropdown'
                value={this.state.dropdown}
                onChange={this.handlerGenerico}
              >
                  <option value='default'>Deixe sua opinião aqui</option>
                  <option>Muito Bom!</option>
                  <option>Bom</option>
                  <option>Ruim</option>
              </select>
            </label>
          </div>
            </fieldset>
            <div className='finalForm'>
              <label>Deseja receber nossa newsletter?
                <input
                  type='checkbox'
                  value={this.state.news}
                  name='news'
                  onChange={this.handlerGenerico}
                />
              </label>
                <input type='file' />
                  <button type='submit'>Enviar</button>
            </div>  
        </form>
        { formWithErrors && 'Formulário Inválido' }
    </div>
    );
  }
}

export default App;
