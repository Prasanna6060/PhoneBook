import React from 'react'

const PersonsForm = ({handleSubmit, newName, newNumber, handleNameChange, handleNumberChange}) => {
  return (
    <div className='p-3 flex flex-col'>
      <form onSubmit={handleSubmit} className='flex gap-3'>
        <div className=' uppercase'>
          name: 
          <input value={newName} onChange={handleNameChange}
          className='bg-slate-50 rounded-lg py-2 px-3' />
        </div>
        <div className='uppercase'>
          number: <input value={newNumber} onChange={handleNumberChange}
          className='bg-slate-50 rounded-lg py-2 px-3' />
        </div>
        <div>
          <button type="submit" 
            className='rounded-lg bg-orange-500 py-2 px-3 text-white uppercase'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonsForm
