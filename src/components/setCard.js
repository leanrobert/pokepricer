import Image from "next/image"

const SetCard = ({ set }) => {
	return (
		<div className="max-h-40 rounded-lg border-blue-900 border-[1px] bg-sky-50 flex flex-col justify-center items-center shadow-sm shadow-zinc-800 py-2 transition-all duration-300 ease-in-out hover:bg-sky-300">
			<h3 className="text-center text-sm font-semibold">{set.name}</h3>
			<p className="text-xs text-amber-500 font-semibold">{set.series}</p>
			<div className="p-1 w-28 h-28 flex items-center justify-center bg-sky-50 rounded-full">
				<Image className="h-full w-full object-contain" src={set.images.logo} height={100} width={100} alt={set.name} />
			</div>
		</div>
	)
}

export default SetCard