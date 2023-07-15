import React from 'react'
import { useSearch } from './../hooks/useSearch'

interface IProps {
  children?: React.ReactNode
}

const Search: React.FC<IProps> = () => {
  async function handleSearch(event: any) {
    const { value } = event.target
    const { getEmoijs, relativeSearchEmoij } = useSearch()
    console.log(await getEmoijs(relativeSearchEmoij(value)))
  }
  return <div className='flex flex-row-reverse items-center'>
    <a className='text-center text-sm w-6 h-full bg-black text-white'>i</a>
    <input onChange={handleSearch} placeholder='Search' className='py-2'></input>
  </div >
}

export default Search
