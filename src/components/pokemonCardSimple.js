import Image from 'next/image'
import React from 'react'
import CardPriceSimple from './cardPriceSimple'
import Link from 'next/link'
import PokemonImage from './pokemonImage'

const PokemonCardSimple = ({ pokemon }) => {
  if (!pokemon.cardmarket && !pokemon.tcgplayer) {
    return null
  }

  return (
    <div className='h-60 rounded-xl bg-sky-50 overflow-hidden border-blue-900 shadow-sm shadow-zinc-800 border max-h-60 flex'>
        <div className='w-1/2 h-full'>
          <PokemonImage image={pokemon.images.small} name={pokemon.name} />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-around px-2 py-2'>
          <h3 className='text-lg font-semibold text-center leading-4'>{pokemon.name}</h3>
          <p className='text-medium text-amber-500'>{pokemon.rarity}</p>
          <p className='text-xs text-zinc-800 text-center leading-3'>{pokemon.set.name} - {pokemon.set.series}</p>

          <Link href={`/card/${pokemon.id}`} className='text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'>
            More Details
          </Link>
        </div>
    </div>
  )
}

export default PokemonCardSimple