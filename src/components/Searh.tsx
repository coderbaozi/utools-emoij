import React from 'react'

interface IProps {
  children?: React.ReactNode
}

const Search: React.FC<IProps> = () => {
  return <div className='flex flex-row-reverse items-center'>
    <a className='text-center text-sm w-6 h-full bg-black text-white'>i</a>
    <input placeholder='Search' className='py-2'></input>
  </div >
}

export default Search
