import React from 'react';

class Position extends React.Component {
  render() {
    const { position, handlerGenerico } = this.props;
    return(
      <label>Position
      <input
      type='textarea'
      value={ position }
      name='position'
      onChange={ handlerGenerico }
      onMouseEnter={ () => { alert('Preencha com cuidado esta informação!'); } }
      maxLength='40'
      isRequire
      />
    </label>
    )
  }
}

export default Position;
