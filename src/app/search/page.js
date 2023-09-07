
import { getCards, getCardsNoFilter } from "@/utils/getCards";
import SearchCardFiltered from "@/components/searchCardFiltered";

export default async function SearchPage({ searchParams }) {
  const page = searchParams['page'] ?? 1
  const search = searchParams['search'] ?? ''

  let cards

  if (search === '') {
    cards = await getCardsNoFilter(page)
  } else {
    cards = await getCards(search, page, 10)
  }

  return (
    <div className="w-full absolute p-4 max-w-6xl flex flex-wrap flex-col items-center">
			<div className="flex flex-col items-center justify-center h-full w-full">
				{<SearchCardFiltered cards={cards} searchParams={searchParams} length={cards.length} />}
			</div>
		</div>
  );
}