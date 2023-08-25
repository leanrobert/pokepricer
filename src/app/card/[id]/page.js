import PriceTable from "@/components/priceTable";
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
    bgFrom: "from-green-400",
    bgTo: "to-green-500",
    textColor: "text-zinc-800"
  },
  "Lightning": {
    bgFrom: "from-yellow-400",
    bgTo: "to-yellow-500",
    textColor: "text-black"
  },
  "Psychic": {
    bgFrom: "from-purple-400",
    bgTo: "to-purple-500",
    textColor: "text-zinc-800"
  },
  "Fighting": {
    bgFrom: "from-yellow-400",
    bgTo: "to-red-500",
    textColor: "text-zinc-800"
  },
  "Darkness": {
    bgFrom: "from-slate-600",
    bgTo: "to-slate-900",
    textColor: "text-zinc-800"
  },
  "Metal": {
    bgFrom: "from-gray-400",
    bgTo: "to-gray-300",
    textColor: "text-black"
  },
  "Dragon": {
    bgFrom: "from-amber-500",
    bgTo: "to-yellow-700",
    textColor: "text-zinc-800"
  },
  "Fairy": {
    bgFrom: "from-pink-400",
    bgTo: "to-pink-500",
    textColor: "text-zinc-800"
  },
  "Colorless": {
    bgFrom: "from-gray-100",
    bgTo: "to-gray-400",
    textColor: "text-black"
  }
}

const PokemonCardDetails = ({ card }) => {
  return(
    <div className={`border-slate-500 border-[1px] bg-gradient-to-br ${colors[card.types[0]].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-zinc-800 rounded-lg p-3`}>
      <h2 className="font-bold text-center mb-3">Card Details</h2>
      <div className="flex justify-around">
      <div className="">
        <p className="font-bold text-sm mb-3">Card Number: <span className="font-normal">{Number(card.number).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false})}/{card.set.total}</span></p>
        <p className="font-bold text-sm mb-3">Card Rariry: <span className="font-normal">{card.rarity}</span></p>
        <p className="font-bold text-sm mb-3">Card Type: <span className="font-normal">{  card.types.map(type => type).join("/")}</span></p>
        <p className="font-bold text-sm mb-3">Card HP: <span className="font-normal">{card.hp}</span></p>
        <p className="font-bold text-sm mb-3">Card Stage: <span className="font-normal">{card.subtypes.map(type => type).join("/")}</span></p>
      </div>
      <div className="">
        <p className="font-bold text-sm mb-3">Card Text:</p>
        {card.abilities?.map((ability, index) => (
          <div className="px-1 max-w-sm" key={index}>
            <div className="rounded-lg px-4 py-2 mb-1 border-stone-300 border-[1px] bg-amber-50">
            <p className="bg-red-500 text-amber-50 rounded-full mb-2 px-3 inline-block text-sm">{ability.name}</p>
            <p className="text-xs">{ability.text}</p>
            </div>
          </div>
        ))}

        {card.attacks.map((attack, index) => (
          <div className="p-1 max-w-sm" key={index}>
            <div className=" border-[1px] bg-amber-50 px-4 py-2 rounded-lg p-1">
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

const CardPrices = async ({ card }) => {
  const money = await getDolarEuro()

  return (
    <div className={`flex flex-col justify-center w-2/3 border-slate-500 border-[1px] bg-gradient-to-br ${colors[card.types[0]].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-zinc-800 rounded-lg p-4`}>
      <h2 className="font-bold text-lg text-center mb-3">Price Details</h2>
      <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl py-2 px-4 flex justify-center">
        <PriceTable tcgplayer={card.tcgplayer} cardmarket={card.cardmarket} money={money} />  
      </div>
    </div>
  )
}

const TrainerCardDetails = ({ card }) => {
  return(
    <div></div>
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
    <div className="mt-[72px] w-full max-w-6xl flex flex-col items-center">
      <h1 className="font-bold text-lg text-zinc-800 mb-4">{card.name} - {card.set.name} ({card.set.ptcgoCode})</h1>
      <div className="flex flex-col gap-8">
        <div className="flex justify-center gap-8 w-full">
          <div className="rounded-xl overflow-hidden">
            <Image priority src={card.images.large} alt={card.name} width={300} height={300} />
          </div>
          <CardPrices card={card} />
        </div>
        {card.supertype === "Pokémon"
          ? <PokemonCardDetails card={card} />
          : <TrainerCardDetails card={card} />
        }
      </div>
    </div>
  )
}
