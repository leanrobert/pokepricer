'use client'

import Image from 'next/image'

const PokemonImage = ({ image, name }) => {
  return (
    <Image
      src={image}
      alt={name}
      priority
      height={126}
      width={92}
      className='transition-opacity opacity-0 duration-[2s] object-contain'
      onLoadingComplete={image => image.classList.remove('opacity-0')}
    />
  )
}

export default PokemonImage