import React from 'react';
import Pokemon from './Pokemon'
//cria a prop desestruturando o objeto e definindo como deverá ficar a disposição dos elementos
//HTML

class PokemonList extends React.Component {
  render() {
    const { pokemons } = this.props;
      return (
        <div className='pokemonList'>
            {pokemons.map((item, index) => (
          <Pokemon pokemon={item} key={index} />
        ))}
        </div>
    )
  }
}

export default PokemonList;