import { useEffect, useState } from 'react'
import pokemonRequest from './../api/pokemons'
import Card from './Card.js'

const Cards = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    pokemonRequest
      .getAll()
      .then((pokemons) => {
        setPokemons(pokemons.data.result)
      })
      .catch((error) => {
        console.error('Error fetching Pokemons: ', error)
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemons.map(({ _id, name, type}) => (
          <Card key={_id} id={_id} name={name} type={type} />
        ))}
      </div>
    </div>
  )
}

export default Cards
