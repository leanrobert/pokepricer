import React from 'react'

const PriceTable = ({ text, prices, money }) => {
  return (
    <div className='italic'>
      <p className='text-center'>{text}</p>
      <div className='flex justify-center'>
        <div className='border rounded-l-lg p-1 text-center'>
          <p>Low</p>
          <p> ${Number(prices.low).toFixed(2)}</p>
        </div>
        <div className='border p-1 text-center'>
          <p>Mid</p>
          <p> ${Number(prices.mid).toFixed(2)}</p>
        </div>
        <div className='border p-1 text-center'>
          <p>High</p>
          <p> ${Number(prices.high).toFixed(2)}</p>
        </div>
        <div className='border rounded-r-lg p-1 text-center'>
          <p>Market</p>
          <p> ${Number(prices.market).toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export const CardTCGPlayer = ({ tcgplayer, money = null }) => {
  if (!tcgplayer) {
    return null
  }

  if (!tcgplayer.prices) {
    return <p>Not available</p>
  }

  const { normal, reverseHolofoil, unlimited, unlimitedHolofoil, holofoil } = tcgplayer.prices
  const firstEdition = tcgplayer.prices['1stEdition']
  const firstEditionHolofoil = tcgplayer.prices['1stEditionHolofoil']

  return (
    <div className='px-2 mb-2'>
      <p className='font-semibold text-center'>TCG Player</p>
      {!tcgplayer.prices ?
        <p>Not available</p> :
        !money ?
          (
            <ul>
              {normal && <li className='italic'>Normal $<span className='font-semibold'>{Number(normal.mid).toFixed(2)}</span></li>}
              {reverseHolofoil && <li className='italic'>Reverse $<span className='font-semibold'>{Number(reverseHolofoil.mid).toFixed(2)}</span></li>}
              {unlimited && <li className='italic'>Unlimited $<span className='font-semibold'>{Number(unlimited.mid).toFixed(2)}</span></li>}
              {unlimitedHolofoil && <li className='italic'>Unlimited $<span className='font-semibold'>{Number(unlimitedHolofoil.mid).toFixed(2)}</span></li>}
              {holofoil && <li className='italic'>Holo $<span className='font-semibold'>{Number(holofoil.mid).toFixed(2)}</span></li>}
              {firstEdition && <li className='italic'>1st Ed $<span className='font-semibold'>{Number(firstEdition.mid).toFixed(2)}</span></li>}
              {firstEditionHolofoil && <li className='italic'>1st Ed $<span className='font-semibold'>{Number(firstEditionHolofoil.mid).toFixed(2)}</span></li>}
            </ul>
          ) :
          (
            <div>
              {normal && <PriceTable text="Normal" prices={normal} money={money} />}
              {reverseHolofoil && <PriceTable text="Reverse" prices={reverseHolofoil} money={money} />}
              {unlimited && <PriceTable text="Unlimited" prices={unlimited} money={money} />}
              {unlimitedHolofoil && <PriceTable text="Unlimited Holo" prices={unlimitedHolofoil} money={money} />}
              {holofoil && <PriceTable text="Holo" prices={holofoil} money={money} />}
              {firstEdition && <PriceTable text="1st Ed" prices={firstEdition} money={money} />}
              {firstEditionHolofoil && <PriceTable text="1st Ed" prices={firstEditionHolofoil} money={money} />}
            </div>
          )
      }
    </div>
  )
}

export const CardCardMarket = ({ cardmarket }) => {
  if (!cardmarket) {
    return null
  }

  if (!cardmarket.prices) {
    return <p>Not available</p>
  }

  const { averageSellPrice } = cardmarket.prices

  return (
    <div className='px-2 mb-2'>
      <p className='font-semibold text-center'>Card Market</p>
      {!averageSellPrice ?
        <p>Not available</p> :
        <p className='italic'>AVG €<span className='font-semibold'>{Number(averageSellPrice).toFixed(2)}</span></p>
      }
    </div>
  )
}

const CardPriceSimple = ({ tcgplayer, cardmarket }) => {
  if (!tcgplayer && !cardmarket) {
    return null
  }

  return (
    <div className='text-xs'>
      <CardTCGPlayer tcgplayer={tcgplayer} />
      <CardCardMarket cardmarket={cardmarket} />
    </div>
  )
}

export default CardPriceSimple