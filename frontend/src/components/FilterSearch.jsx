import React from 'react'

const FilterSearch = ({filter, setFilter}) => {
  return (
    <div className='uppercase text-3xl font-bold mt-3'>
      <p >filter with: <input  value={filter} onChange={(e) => setFilter(e.target.value)}
      className='py-2 px-3 rounded-lg bg-slate-50'/> </p>
     
    </div>
  )
}

export default FilterSearch
