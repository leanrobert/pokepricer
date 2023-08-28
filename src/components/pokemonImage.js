'use client'

import Image from 'next/image'

const PokemonImage = ({ image, name }) => {
  return (
    <Image
      src={image}
      alt={name}
      priority
      height={200}
      width={200}
      className='transition-opacity opacity-0 duration-[2s]'
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  )
}

export default PokemonImage