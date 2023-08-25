'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='text-zinc-800 fixed w-full max-w-6xl z-50'>
      <nav className='bg-amber-50 rounded-b-xl border-slate-500 border-t-transparent border-[1px] px-4 lg:px-6 py-2.5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image src='/logo.png' alt='logo' width={200} height={200} className='bg-white rounded-full mr-3 h-6 w-6 sm:h-9 sm:w-9' />
            <span className='self-center text-xl font-semibold whitespace-nowrap'>Pokepricer</span>
          </Link>

          <div className='flex items-center'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} type='button' className='inline-flex items-center p-2 ml-1 text-sm text-slate-500 rounded-lg lg:hidden hover:bg-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-50'>
              <span className='sr-only'>Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>

          <div className={`${isMenuOpen ? '' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto`}>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
              <li>
                <Link href='/search' className='block py-2 pr-4 pl-3 text-slate-500 border-b border-stone-300 transition duration-300 ease-in-out hover:bg-emerald-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-800 lg:p-0'>Search</Link>
              </li>
              <li>
                <Link href='/' className='block py-2 pr-4 pl-3 text-slate-500 border-b border-stone-300 transition duration-300 ease-in-out hover:bg-emerald-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-800 lg:p-0'>Sets</Link>
              </li>
              <li>
                <Link href='/' className='block py-2 pr-4 pl-3 text-slate-500 border-b border-stone-300 transition duration-300 ease-in-out hover:bg-emerald-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-800 lg:p-0'>FAQ</Link>
              </li>
              <li>
                <Link href='/' className='block py-2 pr-4 pl-3 text-slate-500 border-b border-stone-300 transition duration-300 ease-in-out hover:bg-emerald-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-800 lg:p-0'>pepitoas</Link>
              </li>
              <li>
                <Link href='/' className='block py-2 pr-4 pl-3 text-slate-500 border-b border-stone-300 transition duration-300 ease-in-out hover:bg-emerald-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-zinc-800 lg:p-0'>pepitod</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header