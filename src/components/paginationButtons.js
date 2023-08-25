import Link from 'next/link'
import React from 'react'

const PaginationButtons = ({ page, setPage, data }) => {
  return (
    <div className="flex items-center justify-center gap-3 my-3">
      <Link href={`/search?page=${page > 1 ? page - 1 : 1}`} onClick={() => setPage(page - 1)} className={`text-zinc-800 border-slate-500 border-[1px] bg-stone-300 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-zinc-800 hover:text-amber-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page <= 1 && 'pointer-events-none opacity-50'}`}>Previous</Link>
      <Link href={`/search?page=${page + 1}`} onClick={() => setPage(page + 1)} className={`text-zinc-800 border-slate-500 border-[1px] bg-stone-300 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-zinc-800 hover:text-amber-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 ${page >= data.length / 10 && 'pointer-events-none opacity-50'}`}>Next</Link>
    </div>
)
}

export default PaginationButtons