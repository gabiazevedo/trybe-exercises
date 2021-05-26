import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div>
        <p>{name}</p>
        <p>{type}</p> 
        <p>{`Agerage weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} />
      </div>
    );
  }
}

export default Pokemon;