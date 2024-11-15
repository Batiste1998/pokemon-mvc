import defaultProfileImage from './../img/profile.jpg'
import { useState } from 'react'
import PokemonDetails from './PokemonDetails'

const Card = ({id, name, type, onDelete, onUpdate}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const [editedType, setEditedType] = useState(type)
  const [showDetails, setShowDetails] = useState(false)

  const handleUpdate = () => {
    onUpdate({ _id: id, name: editedName, type: editedType })
    setIsEditing(false)
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <img 
        src={defaultProfileImage} 
        alt={`Profile of ${name}`} 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
      />
      {isEditing ? (
        <div className="w-full">
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-2"
            placeholder="Pokemon Name"
          />
          <input
            type="text"
            value={editedType}
            onChange={(e) => setEditedType(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
            placeholder="Pokemon Type"
          />
          <div className="flex justify-between">
            <button onClick={handleUpdate} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{type}</p>
          <p className="text-xs text-gray-500 mb-4">Pokemon ID: {id}</p>
          <div className="flex space-x-2">
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">Edit</button>
            <button onClick={() => onDelete(id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">Delete</button>
            <button onClick={() => setShowDetails(true)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">View Details</button>
          </div>
        </>
      )}
      {showDetails && (
        <PokemonDetails
          pokemon={{ _id: id, name, type }}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  )
}

export default Card