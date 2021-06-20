import React from 'react'; 

class Resume extends React.Component {
  render() {
    const { textarea, handlerGenerico } = this.props;
    return(
      <label>Resume
        <input
        type='textarea'
        value={ textarea }
        name='textarea'
        onChange={ handlerGenerico }
        maxLength='1000'
        />
      </label>
    )
  }
}

export default Resume; 
