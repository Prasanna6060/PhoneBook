import React from 'react'

const Numbers = ({filteredPersons, handleDelete }) => {
  return (
    <div className=' text-xl font-semi-bold p-2 '>
      {filteredPersons.map((person, i) => (
        <p key={i} className=' py-2 px-3  '>
          {person.name} {person.number} 
          <button 
           onClick={handleDelete}
          className='rounded bg-red-500 py-2 px-3 ml-3'>delete</button>
        </p>
      ))}
     
    </div>
  )
}

export default Numbers
