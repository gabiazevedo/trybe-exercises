import React from 'react';

class Email extends React.Component {
  render() {
    const { email, handlerGenerico } = this.props;

    return(
      <label>
      E-mail:
        <input
          className='email' 
          type='text' 
          name='email' 
          value={ email } 
          onChange={ handlerGenerico }
          placeholder='Digite seu e-mail aqui'
        />
      </label>
    )
  }
}

export default Email; 
