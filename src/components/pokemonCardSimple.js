import Image from 'next/image'
import React from 'react'
import CardPriceSimple from './cardPriceSimple'
import Link from 'next/link'

const PokemonCardSimple = ({ pokemon, money }) => {
  if (!pokemon.cardmarket && !pokemon.tcgplayer) {
    return null
  }

  return (
    <div className='rounded-xl bg-amber-50 overflow-hidden border-stone-300 shadow-sm shadow-zinc-800 border max-h-60'>
      <div className='flex w-full'>
        <div className='w-1/2'>
          <Image className='h-auto w-full' src={pokemon.images.small} height={150} width={150} alt={pokemon.name} />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-start px-2 py-2'>
          <h3 className='text-sm font-semibold'>{pokemon.name} - <span className='text-red-700'>{pokemon.rarity}</span></h3>
          <p className='text-xs text-zinc-800 mb-2'>{pokemon.set.name} - <span className='italic'>{pokemon.set.series}</span></p>

          <CardPriceSimple tcgplayer={pokemon.tcgplayer} cardmarket={pokemon.cardmarket} money={money} />
          <Link href={`/card/${pokemon.id}`} className='text-zinc-800 border-slate-500 border-[1px] bg-stone-300 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-zinc-800 hover:text-amber-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2'>
            More Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonCardSimple