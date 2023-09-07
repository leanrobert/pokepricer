import React from 'react'
import Link from 'next/link'
import PokemonImage from './pokemonImage'

const PokemonCardSimple = ({ pokemon }) => {
  return (
    <div className='h-32 max-w-sm w-full gap-2 rounded-xl bg-sky-50 overflow-hidden border-blue-900 shadow-sm shadow-zinc-800 border flex'>
      <div className='h-full rounded-md overflow-hidden'>
        <PokemonImage image={pokemon.images_small} name={pokemon.name} />
      </div>
      <div className='flex flex-col gap-1 items-center justify-center ml-1'>
          <h3 className='text-lg font-semibold text-center leading-4'>{pokemon.name}</h3>
          <p className='text-medium text-amber-500'>{pokemon.rarity}</p>
          <p className='text-xs text-zinc-800 text-center leading-3'>{pokemon.cardset.name} - {pokemon.cardset.series}</p>
        <div className='flex justify-center gap-4'>
          <Link href={`/card/${pokemon.id}`} className='text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'>
            Mas Detalles
          </Link>
          <button className='text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'>
            Sumar a Lista
          </button>
        </div>
      </div>
    </div>
  )
}

export default PokemonCardSimple