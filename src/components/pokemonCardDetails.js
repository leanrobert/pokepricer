const { colors } = require("@/utils/cardUtility")

export const PokemonCardDetails = ({ card }) => {
  return(
    <div className={`lg:w-1/3 mx-4 max-w-5xl border-blue-900 border-[1px] bg-gradient-to-br ${colors[card.types[0]].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-zinc-800 rounded-lg p-3`}>
      <h2 className="font-bold text-center mb-3 text-black">Card Details</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
        <div className="w-full lg:w-1/3 flex flex-col justify-center bg-sky-50 rounded-lg px-4 py-2">
          <p className="font-bold text-sm mb-3">Card Number: <span className="font-normal">{Number(card.number).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false})}/{card.set.total}</span></p>
          <p className="font-bold text-sm mb-3">Card Rariry: <span className="font-normal">{card.rarity}</span></p>
          <p className="font-bold text-sm mb-3">Card Type: <span className="font-normal">{  card.types.map(type => type).join("/")}</span></p>
          <p className="font-bold text-sm mb-3">Card HP: <span className="font-normal">{card.hp}</span></p>
          <p className="font-bold text-sm mb-3">Card Stage: <span className="font-normal">{card.subtypes.map(type => type).join("/")}</span></p>
        </div>
        <div className="border-[1px] bg-sky-50 px-4 py-2 rounded-lg lg:w-2/3">
          <p className="font-bold text-sm mb-3 text-center">Card Text:</p>
          {card.abilities?.map((ability, index) => (
            <div className="px-1 w-full" key={index}>
              <div className="rounded-lg px-4 py-2 mb-1 border-blue-900 border-[1px] bg-sky-50">
              <p className="bg-red-600 text-sky-50 rounded-full mb-2 px-3 inline-block text-sm">{ability.name}</p>
              <p className="text-xs">{ability.text}</p>
              </div>
            </div>
          ))}

          {card.attacks?.map((attack, index) => (
            <div className="p-1 w-full" key={index}>
              <div className=" border-[1px] bg-sky-100 px-4 py-2 rounded-lg">
                <div className="flex justify-between">
                  <p className="text-sm font-semibold">{attack.name}</p>
                  <p className="font-semibold">{attack.damage}</p>
                </div>
                <p className="text-xs">{attack.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const TrainerCardDetails = ({ card }) => {
  return(
    <div className='lg:w-1/3 mx-4 max-w-5xl border-blue-900 border-[1px] bg-gradient-to-br from-gray-100 to-gray-400 text-zinc-800 rounded-lg p-3'>
      <h2 className="font-bold text-center mb-3 text-black">Card Details</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
        <div className="w-full lg:w-1/3 flex flex-col justify-center bg-sky-50 rounded-lg px-4 py-2">
          <p className="font-bold text-sm mb-3">Card Number: <span className="font-normal">{Number(card.number).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false})}/{card.set.total}</span></p>
          <p className="font-bold text-sm mb-3">Card Rariry: <span className="font-normal">{card.rarity}</span></p>
          <p className="font-bold text-sm mb-3">Card Type: <span className="font-normal">{card.supertype}</span></p>
          <p className="font-bold text-sm mb-3">Card Stage: <span className="font-normal">{card.subtypes?.map(type => type).join("/")}</span></p>
        </div>
        <div className="border-[1px] bg-sky-50 px-4 py-2 rounded-lg lg:w-2/3">
          <p className="font-bold text-sm mb-3 text-center">Card Text:</p>
          {card.rules?.map((ability, index) => (
            <div className="px-1 w-full" key={index}>
              <div className="rounded-lg px-4 py-2 mb-1 border-blue-900 border-[1px] bg-sky-50">
                <p className="text-xs">{ability}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}