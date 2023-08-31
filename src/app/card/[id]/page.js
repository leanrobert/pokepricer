import PokemonImage from "@/components/pokemonImage";
import Loading from "./loading";
import { PokemonCardDetails, TrainerCardDetails } from "@/components/pokemonCardDetails";
import { CardPricesPoke, CardPricesTrainer } from "@/components/cardPrices";


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
      {!card ? <Loading /> : (
        <>
          <h1 className="font-bold text-lg text-zinc-800 mb-4">{card.name} - {card.set.name} ({card.set.ptcgoCode})</h1>
          <div className="flex flex-col justify-center items-center gap-4 lg:flex-row mb-4">
            <div className="rounded-xl overflow-hidden flex items-center justify-center lg:w-1/5">
              <PokemonImage image={card.images.small} name={card.name} />
            </div>
            {card.supertype === "Pokémon" ? (
              <>
                <CardPricesPoke card={card} />
                <PokemonCardDetails card={card} />
              </>
            ) : (
              <>
                <CardPricesTrainer card={card} />
                <TrainerCardDetails card={card} />
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
