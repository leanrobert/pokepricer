"use client"

import SetCard from '@/components/setCard'
import Link from 'next/link'
import React, { useState } from 'react'

const SetCardFiltered = ({ sets }) => {
  const [filter, setFilter] = useState("")

  const filteredSets = sets.filter((set) => set.name.toLowerCase().includes(filter.toLowerCase())).slice(0, 24)

  return (
    <>
      <div className="mb-4 w-3/4 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-blue-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input placeholder='Filtra el set por nombre...' className="w-full p-2 pl-10 text-sm text-zinc-800 border border-blue-900 rounded-lg bg-sky-50 focus:ring-stone-300 focus:border-stone-300"  value={filter} onChange={e => setFilter(e.target.value)} />
      </div>
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {filteredSets.map(set => (
          <Link href={`/set/${set.id}`} key={set.id}>
            <SetCard set={set} />
          </Link>
        ))}
      </div>
    </>
  )
}

export default SetCardFiltered