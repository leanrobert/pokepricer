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
    <div className="pt-[72px] w-full max-w-6xl flex flex-col items-center h-screen">
      <Form setCards={setCards} setPage={setPage} setMoney={setMoney} setIsLoading={setIsLoading} />

      <div className="flex items-center justify-center h-full">
      {isLoading ? <Loading /> : (
        !cards ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">No results found</h2>
            <p className="text-zinc-800">Try searching for something else</p>
          </div>
        ): 
        cards.length === 0 ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Search a Pokémon Card</h2>
            <p className="text-zinc-800">Just input the name of the card you want</p>
          </div>
        ): (
          <div className="pt-4 w-full">
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {cards?.slice(skip, skip + 9).map((pokemon) => (
                <PokemonCardSimple key={pokemon.id} pokemon={pokemon} money={money} />
              ))}
            </div>
            <PaginationButtons page={page} setPage={setPage} data={cards} />
          </div>
        )
      )}
      </div>
    </div>
  );
}