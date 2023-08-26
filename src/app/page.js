import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className='font-bold text-4xl my-10'>Pokepricer</h1>
      <div className="mb-10 flex gap-5">
        <Link href='/search' className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          Search by Card
        </Link>
        <Link href='/sets' className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          Search by Set
        </Link>
      </div>
      <p className="text-center">Search for any card you want, and compare its price with other pages like</p>
      <div className="flex justify-center gap-5 my-10">
        <Image className="h-10 w-auto" src='/tcgplayer.png' height={200} width={200} alt='TCG Player' />
        <Image className="h-14 w-auto" src='/cardmarket.png' height={200} width={200} alt='Cardmarket' />
      </div>
    </div>
  )
}
