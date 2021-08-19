import React from 'react';

class RadioButton extends React.Component {
  render() {
    const { handlerGenerico } = this.props;

    return(
      <div>
        <label htmlFor='house'>
          <input 
            type='radio'
            id='house'
            name='addressType'
            value='House'
            onChange={ handlerGenerico }
          />
          House
        </label>
        <label htmlFor='apart'>
          <input
            type='radio'
            id='apart'
            name='addressType'
            value='Apartament'
            onChange={ handlerGenerico }
          />
          Apartament
        </label>
      </div>
    )
  }
}

export default RadioButton;
