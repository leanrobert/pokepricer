import PokemonImage from "@/components/pokemonImage";
import Loading from "./loading";
import { PokemonCardDetails, TrainerCardDetails } from "@/components/pokemonCardDetails";
import { CardPricesPoke, CardPricesTrainer } from "@/components/cardPrices";
import { getCard } from "@/utils/getCards";


export default async function Card({ params }) {
  const card = await getCard(params.id)

  return(
    <div className="absolute top-[72px] flex flex-col justify-center items-center">
      {!card ? <Loading /> : (
        <>
          <h1 className="font-bold text-lg text-zinc-800 mb-4">{card.name} - {card.cardset.name} ({card.cardset.ptcgocode})</h1>
          <div className="flex flex-col justify-center items-center gap-4 lg:flex-row mb-4">
            <div className="rounded-xl overflow-hidden flex items-center justify-center lg:w-1/5">
              <PokemonImage image={card.images_small} name={card.name} />
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
