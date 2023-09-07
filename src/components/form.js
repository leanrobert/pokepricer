'use client'

import { getCards } from '@/utils/getCards'
import React, { useEffect, useState } from 'react'
import PokemonCardSimple from './pokemonCardSimple'
import PaginationControls from './paginationControls'

const Form = () => {
  const [pokemons, setPokemons] = useState([])
  const [searchString, setSearchString] = useState('')

  return (
    <div className='absolute top-[72px] w-full'>
      <form className="px-4 w-full max-w-2xl mx-auto lg:px-0 lg:max-w-4xl z-0">
        <label htmlFor='default-search' className="mb-2 text-sm font-medium text-zinc-800 sr-only" >Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" id="default-search" className="w-full p-2 pl-10 text-sm text-zinc-800 border border-blue-900 rounded-lg bg-sky-50 focus:ring-stone-300 focus:border-stone-300" onChange={e => setSearchString(e.target.value)} placeholder="Search..." />
          <button type="submit" className="text-blue-900 border-blue-900 border-[1px] absolute bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2" >Search</button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        {pokemons?.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Search a Pokémon Card</h2>
            <p className="text-zinc-800">Just input the name of the card you want</p>
          </div>
        ) : (
          <div className="absolute top-[120px] lg:top-[124px]">
            <div className="max-w-[1100px] grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-0">
              {pokemons?.map((pokemon) => (
                <PokemonCardSimple key={pokemon.id} pokemon={pokemon} />
              ))}
            </div>
            <div className="flex justify-center my-4">
              <PaginationControls prefix='search' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Form