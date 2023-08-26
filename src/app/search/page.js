'use client'

import { useState } from "react";
import PokemonCardSimple from "@/components/pokemonCardSimple";
import Form from "./form";
import PaginationButtons from "@/components/paginationButtons";
import Loading from "./loading";

export default function SearchPage({ searchParams }) {
  const [isLoading, setIsLoading] = useState(false)
  const [cards, setCards] = useState([])
  const [page, setPage] = useState(searchParams.page ?? 1)
  const [money, setMoney] = useState(0)
  let skip = (page - 1) * 10

  return (
    <div className="flex flex-col items-center justify-center">
      <Form setCards={setCards} setPage={setPage} setMoney={setMoney} setIsLoading={setIsLoading} />

      <div className="flex items-center justify-center">
        {isLoading ? <Loading /> : (
          !cards ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold">No results found</h2>
              <p className="text-zinc-800">Try searching for something else</p>
            </div>
          ) : (
            cards.length === 0 ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Search a Pokémon Card</h2>
                <p className="text-zinc-800">Just input the name of the card you want</p>
              </div>
            ) : (
              <div className="absolute top-[120px] lg:top-[124px]">
                <div className="max-w-[1100px] grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:px-0">
                  {cards?.slice(skip, skip + 9).map((pokemon) => (
                    <PokemonCardSimple key={pokemon.id} pokemon={pokemon} money={money} />
                  ))}
                </div>
                <PaginationButtons page={page} setPage={setPage} data={cards} />
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}