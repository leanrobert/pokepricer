import PriceTable from "@/components/priceTable";
import { getTrollPrice } from "@/utils/getCards";
import { getDolarEuro } from "@/utils/getDolarEuro";
import Image from "next/image";

const colors = {
  "Fire": {
    bgFrom: "from-red-500",
    bgTo: "to-yellow-500",
    textColor: "text-zinc-800"
  },
  "Water": {
    bgFrom: "from-blue-500",
    bgTo: "to-sky-200",
    textColor: "text-zinc-800"
  },
  "Grass": {
    bgFrom: "from-emerald-500",
    bgTo: "to-lime-600",
    textColor: "text-zinc-800"
  },
  "Lightning": {
    bgFrom: "from-yellow-200",
    bgTo: "to-yellow-400",
    textColor: "text-black"
  },
  "Psychic": {
    bgFrom: "from-purple-200",
    bgTo: "to-purple-800",
    textColor: "text-zinc-800"
  },
  "Fighting": {
    bgFrom: "from-red-800",
    bgTo: "to-yellow-500",
    textColor: "text-zinc-800"
  },
  "Darkness": {
    bgFrom: "from-slate-300",
    bgTo: "to-slate-900",
    textColor: "text-amber-50-800"
  },
  "Metal": {
    bgFrom: "from-gray-100",
    bgTo: "to-gray-400",
    textColor: "text-black"
  },
  "Dragon": {
    bgFrom: "from-amber-300",
    bgTo: "to-green-900",
    textColor: "text-zinc-800"
  },
  "Fairy": {
    bgFrom: "from-pink-300",
    bgTo: "to-pink-600",
    textColor: "text-zinc-800"
  },
  "Colorless": {
    bgFrom: "from-gray-100",
    bgTo: "to-gray-300",
    textColor: "text-black"
  },
  "default": {
    textColor: 'text-black'
  }
}

const PokemonCardDetails = ({ card }) => {
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

const CardPricesPoke = async ({ card }) => {
  const money = await getDolarEuro()

  return (
    <div className={`lg:w-1/3 flex flex-col justify-center mx-4 border-blue-900 border-[1px] bg-gradient-to-br ${colors[card.types[0] ?? 'default'].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-zinc-800 rounded-lg p-4`}>
      <h2 className="font-bold text-lg text-center mb-3 text-black">Price Details</h2>
      <div className="bg-sky-50 rounded-xl py-2 px-4 flex flex-wrap justify-center">
        <PriceTable tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} money={money} card={card} />  
      </div>
    </div>
  )
}

const TrainerCardDetails = ({ card }) => {
  return(
    <div className={`lg:w-1/3 mx-4 max-w-5xl border-blue-900 border-[1px] bg-gradient-to-br from-gray-100 to-gray-400 text-zinc-800 rounded-lg p-3`}>
      <h2 className="font-bold text-center mb-3 text-black">Card Details</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
        <div className="w-full lg:w-1/3 flex flex-col justify-center bg-sky-50 rounded-lg px-4 py-2">
          <p className="font-bold text-sm mb-3">Card Number: <span className="font-normal">{Number(card.number).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false})}/{card.set.total}</span></p>
          <p className="font-bold text-sm mb-3">Card Rariry: <span className="font-normal">{card.rarity}</span></p>
          <p className="font-bold text-sm mb-3">Card Type: <span className="font-normal">{card.supertype}</span></p>
          <p className="font-bold text-sm mb-3">Card Stage: <span className="font-normal">{card.subtypes.map(type => type).join("/")}</span></p>
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
      </div></div>
  )
}

const CardPricesTrainer = async ({ card }) => {
  const money = await getDolarEuro()

  return (
    <div className={`lg:w-1/3 flex flex-col justify-center mx-4 border-blue-900 border-[1px] bg-gradient-to-br from-gray-100 to-gray-400 text-zinc-800 rounded-lg p-4`}>
      <h2 className="font-bold text-lg text-center mb-3 text-black">Price Details</h2>
      <div className="bg-sky-50 rounded-xl py-2 px-4 flex flex-wrap justify-center">
        <PriceTable tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} money={money} />  
      </div>
    </div>
  )
}

export default async function Card({ params }) {
  const card = await fetch(`https://api.pokemontcg.io/v2/cards/${params.id}`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY
    }
  })
  .then(res => res.json())
  .then(data => data.data)
  .catch(err => console.log(err))

  return(
    <div className="absolute top-[72px] flex flex-col justify-center items-center">
      <h1 className="font-bold text-lg text-zinc-800 mb-4">{card.name} - {card.set.name} ({card.set.ptcgoCode})</h1>
      <div className="flex flex-col justify-center items-center gap-4 lg:flex-row mb-4">
          <div className="rounded-xl overflow-hidden flex items-center justify-center lg:w-1/5">
            <Image priority src={card.images.large} alt={card.name} width={300} height={300} />
          </div>
          {card.supertype === "Pokémon" ? 
            (
              <>
                <CardPricesPoke card={card} />
                <PokemonCardDetails card={card} />
              </>
            ) : (
              <>
                <CardPricesTrainer card={card} />
                <TrainerCardDetails card={card} />
              </>
            )
          }
        </div>
    </div>
  )
}
