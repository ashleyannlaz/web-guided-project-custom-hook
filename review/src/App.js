import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from 'axios';
import data from "../data";

import SelectedPokemon from './components/SelectedPokemon';
import PokeList from './components/PokeList';

const getPokemen = () => {
  return (data);
}

const getPokemon = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
}

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});

  useEffect(() => {
    setPokemen(getPokemen());
  }, []);

  const handlePoke = (id) => {
    getPokemon(id)
      .then((res) => {
        return (res.data);
      })
      .then(data => {
        setSelectedPokemon(data);
      })
  };

  return (
    <div className="App">
      <SelectedPokemon selectedPokemon={selectedPokemon} />
      <PokeList handlePoke={handlePoke} pokemen={pokemen} />
    </div>
  );
}

export default App;