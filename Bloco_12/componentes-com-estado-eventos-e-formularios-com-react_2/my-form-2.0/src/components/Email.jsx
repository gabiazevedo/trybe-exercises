import React from 'react';

class Email extends React.Component {
  render() {
    const { email, handlerGenerico } = this.props;

    return(
      <label>
        Email:
        <input 
          type='email'
          name='email'
          maxLength='50'
          value={ email }
          onChange={ handlerGenerico }
          placeholder='seu e-mail aqui'
          isRequire
        />
      </label>
    )
  }
}

export default Email;