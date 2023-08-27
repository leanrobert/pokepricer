import { getTrollPrice } from '@/utils/getCards'
import { getTableValues } from '@/utils/getDolarEuro'

const PriceTable = async ({ tcgplayer, cardmarket, money, card }) => {
	const data = getTableValues(tcgplayer, cardmarket)
	const troll = await getTrollPrice(card.name, card.number, card.set.printedTotal)

	const trollArs = Number(troll * money.blue.value_sell).toFixed(2)
	const cardArs = Number(data.cardmar * money.blue_euro.value_sell).toFixed(2)
	const avgArs = (trollArs + cardArs) / 3

	return (
		<div className='flex flex-col gap-4 py-1'>
			{data.map((values, index) => (
				<div key={index}>
					<h3 className='capitalize text-center font-bold'>{values.name}</h3>
					<table  className='table-fixed w-full text-center bg-sky-50 rounded-lg text-xs lg:text-base'>
						<thead>
							<tr className='border-blue-900 border-b-[1px]'>
								<th className='py-1' />
								<th className='py-1'>Troll and Toad</th>
								<th className='py-1'>TCG Player</th>
								<th className='py-1'>CardMarket</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='py-1'>Price</td>
								<td className='py-1'>${troll}</td>
								<td className='py-1'>${values.tcgp}</td>
								<td className='py-1'>€{values.cardmar}</td>
							</tr>
							<tr>
								<td className='py-1'>ARS</td>
								<td className='py-1'>${trollArs}</td>
								<td className='py-1'>${Number(values.tcgp * money.blue.value_sell).toFixed(2)}</td>
								<td className='py-1'>${Number(values.cardmar * money.blue_euro.value_sell).toFixed(2)}</td>
							</tr>
							<tr className='font-bold bg-sky-100 text-red-700'>
								<td className='py-1'>Average</td>
								<td colSpan={3} className='py-1'>${Number((Number(trollArs) + values.tcgp * money.blue.value_sell + values.cardmar * money.blue_euro.value_sell) / 3).toFixed(2)}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}

export default PriceTable