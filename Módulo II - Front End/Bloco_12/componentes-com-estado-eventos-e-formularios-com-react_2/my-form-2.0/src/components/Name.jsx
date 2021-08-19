import React from 'react';

class Name extends React.Component {
  render() {

    const { name, handlerGenerico } = this.props
    
    return(
      <label>
      Nome:
        <input 
          type='text' 
          name='name' 
          value={ name } 
          maxLength='40'
          onChange={ handlerGenerico } 
          placeholder='Digite o seu nome aqui'
          isRequire
        />
      </label>
    )
  }
}

export default Name;
