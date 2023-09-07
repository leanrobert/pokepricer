import Link from "next/link"
const PaginationControls = ({ prefix, page }) => {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={`/${prefix}?page=${Number(page) - 1}`}
        className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page <= 1 && 'pointer-events-none opacity-50'}`}
      >
        Previous
      </Link>
      <div>
       page <span className="text-amber-600 font-bold">{page}</span>
      </div>
      <Link
        href={`/${prefix}?page=${Number(page) + 1}`}
        className={`text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page >= 100 && 'pointer-events-none opacity-50'}`}
      >
        Next
      </Link>
    </div>
  )
}

export default PaginationControls