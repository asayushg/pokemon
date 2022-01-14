import axios from 'axios';

export const getPokemons = (page) =>{
    return axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset="+20*page);
} 

export const getPokemonInfo = (_id) =>{
    return axios.get("https://pokeapi.co/api/v2/pokemon/"+_id);
} 