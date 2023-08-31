import Skeleton from "@/components/skeleton";

export default function Loading () {
  return (
    <div className="mt-6">
      <Skeleton className='h-10 w-[300px] mb-4 mx-auto' />
      <div className="flex flex-col justify-center items-center gap-4 lg:flex-row mb-4">
        <Skeleton className="h-[280px] w-[200px]" />
        <Skeleton className="h-[280px] w-[500px]" />
        <Skeleton className="h-[280px] w-[500px]" />
      </div>
    </div>
  )
}