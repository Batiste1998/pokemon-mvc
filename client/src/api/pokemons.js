import axios from 'axios'

const pokemonRequest = {
  getAll: () => axios.get('/api/pokemons/all').then((res) => res),
  create: (pokemon) => axios.post('/api/pokemons/create', pokemon).then((res) => res),
  update: (pokemon) => axios.put('/api/pokemons/update', pokemon).then((res) => res),
  delete: (id) => axios.delete('/api/pokemons/delete', { data: { _id: id } }).then((res) => res)
}

export default pokemonRequest