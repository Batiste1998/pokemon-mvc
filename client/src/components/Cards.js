import Card from './Card.js'
import { useEffect, useState } from 'react'
import pokemonRequest from './../api/pokemons'

const Cards = () => {
  const [pokemons, setPokemons] = useState([])
  const [newPokemon, setNewPokemon] = useState({ name: '', type: '' })

  useEffect(() => {
    fetchPokemons()
  }, [])

  const fetchPokemons = () => {
    pokemonRequest
      .getAll()
      .then((pokemons) => {
        setPokemons(pokemons.data.result)
      })
      .catch((error) => {
        console.error('Error fetching Pokemons: ', error)
      })
  }

  const handleAddPokemon = (e) => {
    e.preventDefault()
    pokemonRequest.create(newPokemon)
      .then(() => {
        fetchPokemons()
        setNewPokemon({ name: '', type: '' })
      })
      .catch((error) => {
        console.error('Error adding Pokemon: ', error)
      })
  }

  const handleDeletePokemon = (id) => {
    pokemonRequest.delete(id)
      .then(() => {
        fetchPokemons()
      })
      .catch((error) => {
        console.error('Error deleting Pokemon: ', error)
      })
  }

  const handleUpdatePokemon = (updatedPokemon) => {
    pokemonRequest.update(updatedPokemon)
      .then(() => {
        fetchPokemons()
      })
      .catch((error) => {
        console.error('Error updating Pokemon: ', error)
      })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleAddPokemon} className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Pokemon Name
          </label>
          <input
            id="name"
            type="text"
            value={newPokemon.name}
            onChange={(e) => setNewPokemon({...newPokemon, name: e.target.value})}
            placeholder="Enter Pokemon Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Pokemon Type
          </label>
          <input
            id="type"
            type="text"
            value={newPokemon.type}
            onChange={(e) => setNewPokemon({...newPokemon, type: e.target.value})}
            placeholder="Enter Pokemon Type"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-center mt-4">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Pokemon
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map(({ _id, name, type}) => (
          <Card 
            key={_id} 
            id={_id} 
            name={name} 
            type={type} 
            onDelete={handleDeletePokemon}
            onUpdate={handleUpdatePokemon}
          />
        ))}
      </div>
    </div>
  )
}

export default Cards