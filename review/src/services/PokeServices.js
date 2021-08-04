import axios from 'axios'
import data from './../../data'

export const getAllPokemon = () => {
    return(data);
}

export const getPokemon = (id) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => {
      return res.data
    }) 
    // .then(data => {
    //   console.log(data)
    // })
  }

