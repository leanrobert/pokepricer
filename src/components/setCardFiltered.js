"use client"

import PaginationControls from '@/components/paginationControls'
import SetCard from '@/components/setCard'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SetCardFiltered = ({ sets, searchParams }) => {
  const [sortedSet, setSortedSet] = useState(sets)
  const [method, setMethod] = useState('')

  const page = searchParams['page'] ?? '1'
	const perPage = searchParams.per_page ?? '24'

	const start = (Number(page) - 1) * Number(perPage)
	const end = start + Number(perPage)

  useEffect(() => {
    let newArr = []

    switch (method) {
      case 'reciente':
        newArr = [...sortedSet].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
        setSortedSet(newArr)
        break
      case 'order':
        newArr = [...sortedSet].sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
        setSortedSet(newArr)
        break
      case 'a-z':
        newArr = [...sortedSet].sort((a, b) => a.name < b.name ? -1 : 1)
        setSortedSet(newArr)
        break
      case 'z-a':
        newArr = [...sortedSet].sort((a, b) => b.name < a.name ? -1 : 1)
        setSortedSet(newArr)
        break
    }
  }, [method])

  const handleMethodSort = (newMethod) => {
    setMethod(newMethod)
  }

  return (
    <>
      <div className="mb-4 gap-4 flex flex-wrap">
        <select onChange={(e) => handleMethodSort(e.target.value)} className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          <option value="reciente">Reciente</option>
          <option value="order">Orden de Salida</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
      <div className="mb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {sortedSet.slice(start, end).map(set => (
          <Link href={`/set/${set.id}`} key={set.id}>
            <SetCard set={set} />
          </Link>
        ))}
      </div>
      <PaginationControls setsLength={sets.length} prefix='sets' jump={24} />
    </>
  )
}

export default SetCardFiltered