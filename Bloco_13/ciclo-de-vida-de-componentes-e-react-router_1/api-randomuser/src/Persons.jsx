import React from 'react';

class Persons extends React.Component {
  render() {
    const { users: { name, email, age, image } } = this.props;

    return(
      <div className='user' key='index'>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <h5>{age}</h5>
        <img src={image} alt={name} />
    </div>
    )
  }
}

export default Persons;
