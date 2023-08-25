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
    <form className="w-full max-w-2xl lg:max-w-4xl z-0" onSubmit={handleSubmit}>
      <label htmlFor='default-search' className="mb-2 text-sm font-medium text-zinc-800 sr-only" >Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-slate-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="w-full p-2 pl-10 text-sm text-zinc-800 border border-slate-500 rounded-lg bg-amber-50 focus:ring-stone-300 focus:border-stone-300" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
        <button type="submit" className="text-zinc-800 border-slate-500 border-[1px] absolute bg-stone-300 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-zinc-800 hover:text-amber-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2" >Search</button>
      </div>
    </form>
  )
}

export default Form