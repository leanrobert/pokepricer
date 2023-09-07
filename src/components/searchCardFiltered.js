"use client"

import React, { useState } from 'react'
import PokemonCardSimple from './pokemonCardSimple'
import PaginationControls from './paginationControls'
import { useRouter } from 'next/navigation'

const SearchCardFiltered = ({ cards, searchParams, length }) => {
  const [filter, setFilter] = useState('')
  const [search, setSearch] = useState('')

  const router = useRouter()

  const handleClick = () => {
    if (search !== '') {
      router.push(`/search?search=${search}&page=1`)
    }

    setSearch('')
  }

  const page = searchParams['page'] ?? 1
  const per_page = searchParams['per_page'] ?? 10

  const filteredCards = cards.filter(card => card.name.toLowerCase().includes(filter.toLowerCase())).slice((Number(page) - 1) * Number(per_page), Number(page) * Number(per_page))

  return (
    <>
      <div className="mb-4 relative flex gap-4 w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input placeholder='Buscar...' className="w-full p-2 pl-10 text-sm text-zinc-800 border border-blue-900 rounded-lg bg-sky-50 focus:ring-stone-300 focus:border-stone-300"  value={search} onChange={e => {setSearch(e.target.value)}} />
        <button onClick={handleClick} className="text-blue-900 border-blue-900 border-[1px] absolute bg-sky-50 right-1/2 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input placeholder='Filtra el set por nombre...' className="w-full p-2 pl-10 text-sm text-zinc-800 border border-blue-900 rounded-lg bg-sky-50 focus:ring-stone-300 focus:border-stone-300"  value={filter} onChange={e => {setFilter(e.target.value)}} />
      </div>
      <div className="mb-4 flex flex-wrap justify-center gap-4 w-full">
        {filteredCards?.map(card => (
          <PokemonCardSimple key={card.id} pokemon={card} />
        ))}
      </div>
      <PaginationControls prefix='search' searchParams={searchParams} length={cards.length} />
    </>
  )
}

export default SearchCardFiltered