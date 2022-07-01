import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App(){

  const [pokemons, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then(res => setPokemon(res.data.results))
    .catch(err => console.log(err))
  })

  return(
    <div className="App">
      {pokemons.map((pokemon, i) => (
        <div key={i}>
          {pokemon.name}
        </div>
      ))}
    </div>
  )
}
export default App;