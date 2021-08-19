import React from 'react';

class JobDescription extends React.Component {
  render() {
    const { jobDescription, handlerGenerico } = this.props;

    return(
      <label>Job Description
      <input
      type='textarea'
      value={ jobDescription }
      name='jobDescription'
      onChange={ handlerGenerico }
      maxLength='500'
      />
    </label>
    )
  }
}

export default JobDescription;
