'use client'

import { useState } from "react";
import PokemonCardSimple from "@/components/pokemonCardSimple";
import Form from "../../components/form";
import Loading from "./loading";
import PaginationControls from "@/components/paginationControls";

export default function SearchPage({ searchParams }) {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)

  const page = searchParams['page'] ?? '1'
	const perPage = searchParams.per_page ?? '9'

	const start = (Number(page) - 1) * Number(perPage)
	const end = start + Number(perPage)

	const entries = cards?.slice(start, end)

  return (
    <div className="flex flex-col items-center justify-center">
      <Form setCards={setCards} setLoading={setLoading} />

      <div className="flex items-center justify-center">
        {loading ? <Loading /> : (
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
                  {entries.map((pokemon) => (
                    <PokemonCardSimple key={pokemon.id} pokemon={pokemon} />
                  ))}
                </div>
                <div className="flex justify-center my-4">
                  <PaginationControls setsLength={cards.length} prefix='search' jump={9} />
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}