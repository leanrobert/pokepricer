import { getSets } from "@/utils/getCards"
import SetCardFiltered from "../../components/setCardFiltered";

export default async function SetsPage ({ searchParams }) {
	const sets = await getSets()

	return (
		<div className="absolute p-4 max-w-6xl flex flex-wrap flex-col items-center">
			<div className="flex flex-col items-center justify-center h-full">
				<SetCardFiltered sets={sets} searchParams={searchParams} />
			</div>
		</div>
	)
}