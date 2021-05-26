import React from 'react';
import PokemonList from './PokemonList';
import pokemons from './data.js';
import './App.css';

class  App extends React.Component {
  render() {
  return (
  <div className="divMae">
    <p>Pokedex</p>
        <PokemonList pokemons={pokemons} />
      </div>
  );
  }
}

export default App;
