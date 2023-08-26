'use client'

import SetCard from "@/components/setCard";
import { getSets } from "@/utils/getCards"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SetsPage ({ searchParams }) {
	const [sets, setSets] = useState([])
	
	useEffect(() => {
		const fetchSets = async () => {
			const data = await getSets()
			return data
		}

		fetchSets().then(res => setSets(res))
	}, [])

	const [page, setPage] = useState(Number(searchParams.page) || 1)
	let skip = (page - 1) * 10

	return (
		<div className="absolute p-4 max-w-6xl flex flex-wrap flex-col items-center">
			<div className="flex flex-col items-center justify-center h-full">
				<div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full">
					{sets.slice(skip, skip + 24).map(set => (
						<Link href={`/set/${set.id}`} key={set.id}>
							<SetCard set={set} />
						</Link>
					))}
				</div>
				<div className="flex items-center justify-center gap-3 my-4">
					<Link href={`/sets?page=${page > 1 ? page - 1 : 1}`} onClick={() => setPage(page - 1)} className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page <= 1 && 'pointer-events-none opacity-50'}`}>Previous</Link>
					<Link href={`/sets?page=${page + 1}`} onClick={() => setPage(page + 1)} className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page >= sets.length / 24 && 'pointer-events-none opacity-50'}`}>Next</Link>
				</div>
			</div>
		</div>
	)
}