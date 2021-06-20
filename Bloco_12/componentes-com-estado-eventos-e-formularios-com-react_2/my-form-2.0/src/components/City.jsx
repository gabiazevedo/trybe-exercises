import React from 'react';

class City extends React.Component {
  render() {
    const { city, handlerGenerico, onBlurHandler } = this.props;
    
    return(
      <label>
        City:
        <input 
          type='text'
          name='city'
          value={ city }
          onChange={ handlerGenerico }
          onBlur={ onBlurHandler }
          maxLength='28'
          isRequire 
        />
      </label>
    )
  }
}

export default City; 
