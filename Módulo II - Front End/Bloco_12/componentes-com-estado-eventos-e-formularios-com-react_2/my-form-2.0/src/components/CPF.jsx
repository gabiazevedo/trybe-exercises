import React from 'react';

class CPF extends React.Component {
  render() {

    const { cpf, handlerGenerico } = this.props;
    return(
      <label>
        CPF:
        <input 
          type='text'
          name='cpf'
          value={ cpf }
          onChange={ handlerGenerico }
          maxLength='11'
          isRequire 
        />
      </label>
    )
  }
}

export default CPF;