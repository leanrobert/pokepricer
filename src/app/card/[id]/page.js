import { CardCardMarket, CardTCGPlayer } from "@/components/cardPriceSimple";
import { getDolarEuro } from "@/utils/getDolarEuro";
import Image from "next/image";

const colors = {
  "Fire": {
    bgFrom: "from-red-500",
    bgTo: "to-red-400",
    textColor: "text-white"
  },
  "Water": {
    bgFrom: "from-blue-500",
    bgTo: "to-blue-600",
    textColor: "text-white"
  },
  "Grass": {
    bgFrom: "from-green-400",
    bgTo: "to-green-500",
    textColor: "text-white"
  },
  "Lightning": {
    bgFrom: "from-yellow-400",
    bgTo: "to-yellow-500",
    textColor: "text-black"
  },
  "Psychic": {
    bgFrom: "from-purple-400",
    bgTo: "to-purple-500",
    textColor: "text-white"
  },
  "Fighting": {
    bgFrom: "from-yellow-400",
    bgTo: "to-red-500",
    textColor: "text-white"
  },
  "Darkness": {
    bgFrom: "from-slate-600",
    bgTo: "to-slate-900",
    textColor: "text-white"
  },
  "Metal": {
    bgFrom: "from-gray-400",
    bgTo: "to-gray-300",
    textColor: "text-black"
  },
  "Dragon": {
    bgFrom: "from-amber-500",
    bgTo: "to-yellow-700",
    textColor: "text-white"
  },
  "Fairy": {
    bgFrom: "from-pink-400",
    bgTo: "to-pink-500",
    textColor: "text-white"
  },
  "Colorless": {
    bgFrom: "from-gray-100",
    bgTo: "to-gray-400",
    textColor: "text-black"
  }
}

const PokemonCardDetails = async ({ card }) => {
  const money = await getDolarEuro()

  return(
    <div className="flex justify-center gap-4">
      <div className={`bg-gradient-to-br ${colors[card.types[0]].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-gray-700 rounded-lg p-3`}>
        <h2 className="font-bold text-center mb-3">Card Details</h2>
        <p className="font-bold text-sm mb-3">Card Number & Rariry: <span className="font-normal">{Number(card.number).toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping: false})}/{card.set.total}</span></p>
        <p className="font-bold text-sm mb-3">Card Type, HP, Stage: <span className="font-normal">{card.types.map(type => type).join("/")}, {card.hp}, {card.subtypes.map(type => type).join("/")}</span></p>
        <div>
          <p className="font-bold text-sm mb-3">Card Text:</p>
          {card.abilities?.map((ability, index) => (
            <div className="px-1 max-w-sm" key={index}>
              <div className="rounded-lg px-1 mb-1">
              <p className="bg-red-600 rounded-full px-3 inline-block text-sm">{ability.name}</p>
              <p className="text-xs">{ability.text}</p>
              </div>
            </div>
          ))}

          {card.attacks.map((attack, index) => (
            <div className="p-1 max-w-sm" key={index}>
              <div className=" border-[1px] rounded-lg p-1">
                <div className="flex justify-between">
                  <p className="text-sm">{attack.name}</p>
                  <p>{attack.damage}</p>
                </div>
                <p className="text-xs">{attack.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`bg-gradient-to-br ${colors[card.types[0]].textColor} ${card.types.length === 1 ? `${colors[card.types[0]].bgFrom} ${colors[card.types[0]].bgTo}` : `${colors[card.types[0]].bgFrom} ${colors[card.types[1]].bgTo}`} text-gray-700 rounded-lg p-3`}>
        <h2 className="font-bold text-center mb-3">Price Details</h2>
        <div className="bg-white/20 rounded-xl">
          <CardTCGPlayer tcgplayer={card.tcgplayer} money={money} />
        </div>
        <div className="bg-white/20 rounded-xl">
          <CardCardMarket cardmarket={card.cardmarket} money={money} />
        </div>
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
      <h1 className="font-bold text-lg text-emerald-600 mb-4">{card.name} - {card.set.name} ({card.set.ptcgoCode})</h1>
      <div className="w-full px-10 flex justify-center gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image priority src={card.images.large} alt={card.name} width={300} height={300} />
        </div>
        {card.supertype === "Pokémon"
          ? <PokemonCardDetails card={card} />
          : <TrainerCardDetails card={card} />
        }
      </div>
    </div>
  )
}
