import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-4">
        <Image src='/logo.png' className="h-10 w-10 bg-white rounded-full" height={64} width={64} alt='Pokepricer' />
        <h1 className='font-bold text-4xl my-10'>Pokepricer</h1>
      </div>
      <div className="mb-10 flex gap-5">
        <Link href='/search' className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          Search by Card
        </Link>
        <Link href='/sets' className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
          Search by Set
        </Link>
      </div>
      <p className="text-center">Search for any card you want, and compare its price with other pages like</p>
      <div className="flex flex-wrap justify-center gap-5 my-10">
        <Link href='https://tcgplayer.com' target="_blank" className="flex items-center">
          <Image className="h-10 w-auto" src='/tcgplayer.png' height={150} width={400} alt='TCG Player' />
        </Link>
        <Link href='https://cardmarket.com' target="_blank" className="flex items-center">
          <Image className="h-14 w-auto" src='/cardmarket.png' height={282} width={763} alt='Cardmarket' />
        </Link>
        <Link href='https://trollandtoad.com' target="_blank" className="flex items-center">
          <Image className="h-10 w-auto" src='/troll.png' height={100} width={500} alt="Troll and Toad" />
        </Link>
      </div>
    </div>
  )
}
