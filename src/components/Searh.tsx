import React from 'react'

interface IProps {
  children?: React.ReactNode
  handleSearch: (event: any) => void
}

const Search: React.FC<IProps> = ({ handleSearch }) => {
  return <div className='flex flex-row-reverse items-center'>
    <a className='text-center text-sm w-6 h-full bg-black text-white'>i</a>
    <input onChange={handleSearch} placeholder='Search' className='py-2'></input>
  </div >
}

export default Search
