import Skeleton from "@/components/skeleton";

export default function Loading () {
  const arraySkel = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      {arraySkel.map((_, i) => (
        <div key={i} className='h-60 w-80 rounded-xl bg-sky-50 overflow-hidden border-blue-900 shadow-sm shadow-zinc-800 border max-h-60 flex'>
          <div className='w-1/2 h-full'>
            <Skeleton className='h-full w-full' />
          </div>
          <div className='w-1/2 flex flex-col items-center justify-around px-2 py-2'>
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-4 w-16' />
            <Skeleton className='h-4 w-24' />
            <Skeleton className='h-8 w-24' />
          </div>
        </div>
      ))}
    </>
  )
}
