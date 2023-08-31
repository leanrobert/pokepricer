import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Loading from './sets/loading'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokepricer',
  description: 'Get the price of your pokemon cards in real time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-zinc-800 bg-gradient-to-b from-sky-300 to-white h-screen flex flex-col items-center`}>
        <Header />
        <Suspense fallback={<Loading />}>
      		<main className='h-full w-full flex justify-center'>
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  )
}
