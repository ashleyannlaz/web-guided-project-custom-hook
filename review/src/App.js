import React, { useState, useEffect } from "react";
import "./styles.scss";

import SelectedPokemon from './components/SelectedPokemon';
import PokeList from './components/PokeList';

import { getPokemon, getPokemen } from './services/PokeService';

function App() {
  const [pokemen, selectedPokemon, handlePoke] = usePokeState();

  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;