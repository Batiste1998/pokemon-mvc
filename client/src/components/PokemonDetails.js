import React from 'react'
import defaultProfileImage from './../img/profile.jpg'

const PokemonDetails = ({ pokemon, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <img 
            src={defaultProfileImage} 
            alt={`Profile of ${pokemon.name}`} 
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200 mx-auto"
          />
          <h3 className="text-lg leading-6 font-medium text-gray-900">{pokemon.name}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">Type: {pokemon.type}</p>
            <p className="text-sm text-gray-500">ID: {pokemon._id}</p>
            {/* Add more details here as needed */}
          </div>
          <div className="items-center px-4 py-3">
            <button
              id="ok-btn"
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails