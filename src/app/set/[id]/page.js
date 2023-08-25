'use client'

import PokemonCardSimple from "@/components/pokemonCardSimple"
import { getCardsBySet } from "@/utils/getCards"
import { getDolarEuro } from "@/utils/getDolarEuro"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Card({ params, searchParams }) {
	const [cards, setCards] = useState([])
	const [money, setMoney] = useState(0)

	useEffect(() => {
		const data = async () => getCardsBySet(params.id)
		const money = async () => getDolarEuro()
		money().then(res => setMoney(res))
		data().then(res => setCards(res))
	}, [params.id])

	const [page, setPage] = useState(Number(searchParams.page) || 1)
	let skip = (page - 1) * 10

  return(
    <div className="pt-[72px] w-full max-w-6xl flex flex-col items-center h-screen">
			<div className="w-full">
			<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {cards.length > 0 && cards.slice(skip, skip + 9).map(card => (
				<PokemonCardSimple key={card.id} pokemon={card} money={money} />
			))}
			</div>
			</div>
			<div className="flex items-center justify-center gap-3 my-4">
				<Link href={`/set/${params.id}?page=${page > 1 ? page - 1 : 1}`} onClick={() => setPage(page - 1)} className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page <= 1 && 'pointer-events-none opacity-50'}`}>Previous</Link>
				<Link href={`/set/${params.id}?page=${page + 1}`} onClick={() => setPage(page + 1)} className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page >= cards.length / 9 && 'pointer-events-none opacity-50'}`}>Next</Link>
			</div>
    </div>
  )
}