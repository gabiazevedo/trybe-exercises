import React from 'react';

class Nome extends React.Component {
  render() {

    const { nome, handlerGenerico } = this.props
    
    return(
      <label>
      Nome:
        <input
          className='nome' 
          type='text' 
          name='nome' 
          value={ nome } 
          onChange={ handlerGenerico } 
          placeholder='Digite o seu nome aqui'
        />
      </label>
    )
  }
}

export default Nome;
