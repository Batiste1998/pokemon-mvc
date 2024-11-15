import defaultProfileImage from './../img/profile.jpg'

const Card = ({id, name, type}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
      <img 
        src={defaultProfileImage} 
        alt={`Profile of ${name}`} 
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{type}</p>
      <p className="text-xs text-gray-500 mb-4">Pokemon ID: {id}</p>
    </div>
  )
}

export default Card