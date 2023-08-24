'use client'

import { getCards } from '@/utils/getCards'
import { getDolarEuro } from '@/utils/getDolarEuro'
import React, { useState } from 'react'

const Form = ({ setCards, setPage, setMoney, setIsLoading }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await getCards(search)
      const money = await getDolarEuro()
      setMoney(money)
      setCards(res)
      setPage(1)
    } catch (error) {
      console.log(error)
    }
    setSearch('')
    setIsLoading(false)
  }

  return (
    <form className="w-full max-w-2xl lg:max-w-4xl" onSubmit={handleSubmit}>
      <label htmlFor='default-search' className="mb-2 text-sm font-medium text-emerald-900 sr-only" >Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-emerald-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="w-full p-2 pl-10 text-sm text-emerald-900 border border-emerald-300 rounded-lg bg-emerald-50 focus:ring-emerald-500 focus:border-emerald-500" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
        <button type="submit" className="text-white absolute bg-emerald-700 right-0 bottom-0 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-[9px]" >Search</button>
      </div>
    </form>
  )
}

export default Form