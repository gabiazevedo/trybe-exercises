import React from 'react';

class Address extends React.Component {
  render() {
    const { address, handlerGenerico } = this.props;
      return(
      <label>
        Address:
        <input 
          type='text'
          name='address'
          value={ address }
          onChange={ handlerGenerico }
          maxLength='200'
          isRequire 
        />
      </label>
    )
  }
}

export default Address;