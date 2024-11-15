import axios from 'axios'

const pokemonRequest = {
  getAll: () => axios.get('/api/pokemons/all').then((res) => res)
}

export default pokemonRequest