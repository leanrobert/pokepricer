import Image from 'next/image'
import React from 'react'
import CardPriceSimple from './cardPriceSimple'
import Link from 'next/link'

const PokemonCardSimple = ({ pokemon, money }) => {
  if (!pokemon.cardmarket && !pokemon.tcgplayer) {
    return null
  }

  return (
    <div className='rounded-xl overflow-hidden border-emerald-100 border max-h-60'>
      <div className='flex w-full'>
        <div className='w-1/2'>
          <Image className='h-auto w-full' src={pokemon.images.small} height={150} width={150} alt={pokemon.name} />
        </div>
        <div className='w-1/2 flex flex-col items-center justify-start px-2 py-2'>
          <h3 className='text-sm'>{pokemon.name} - <span className='text-emerald-300'>{pokemon.rarity}</span></h3>
          <p className='text-xs text-gray-500 mb-2'>{pokemon.set.name} - <span className='italic'>{pokemon.set.series}</span></p>

          <CardPriceSimple tcgplayer={pokemon.tcgplayer} cardmarket={pokemon.cardmarket} money={money} />
          <Link href={`/card/${pokemon.id}`} className='font-medium rounded-lg text-sm px-4 py-[9px] text-white bg-gradient-to-br from-emerald-700 right-0 bottom-0 to-emerald-400 ease-in-out hover:from-emerald-800 hover:to-emerald-500 focus:ring-4 focus:outline-none focus:ring-emerald-300'>
            More Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonCardSimple