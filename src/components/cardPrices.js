import { getDolarEuro } from "@/utils/getDolarEuro"
import PriceTable from "./priceTable"
import { colors } from "@/utils/cardUtility"

export const CardPricesPoke = async ({ card }) => {
  const money = await getDolarEuro()

  return (
    <div className={`lg:w-1/3 max-w-5xl flex flex-col justify-center mx-4 border-blue-900 border-[1px] bg-gradient-to-br ${colors[card.types[0] ?? 'default'].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-zinc-800 rounded-lg p-4`}>
      <h2 className="font-bold text-lg text-center mb-3 text-black">Price Details</h2>
      <div className="bg-sky-50 rounded-xl py-2 px-4 flex flex-wrap justify-center">
        <PriceTable tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} money={money} card={card} />
      </div>
    </div>
  )
}

export const CardPricesTrainer = async ({ card }) => {
  const money = await getDolarEuro()

  return (
    <div className={`lg:w-1/3 flex flex-col justify-center mx-4 border-blue-900 border-[1px] bg-gradient-to-br from-gray-100 to-gray-400 text-zinc-800 rounded-lg p-4`}>
      <h2 className="font-bold text-lg text-center mb-3 text-black">Price Details</h2>
      <div className="bg-sky-50 rounded-xl py-2 px-4 flex flex-wrap justify-center">
        <PriceTable tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} money={money} card={card} />
      </div>
    </div>
  )
}