import { getTableValues } from '@/utils/getDolarEuro'
import React from 'react'

const PriceTable = ({ tcgplayer, cardmarket, money }) => {
	const data = getTableValues(tcgplayer, cardmarket, money)

	return (
		<div className='flex flex-col gap-4 py-1'>
			{data.map((values, index) => (
				<div key={index}>
					<h3 className='capitalize text-center font-bold'>{values.name}</h3>
					<table  className='table-fixed w-full text-center bg-sky-50 rounded-lg text-xs lg:text-base'>
						<thead>
							<tr className='border-blue-900 border-b-[1px]'>
								<th className='py-1' />
								<th className='bg-sky-100 text-red-600 py-1'>ARS</th>
								<th className='py-1'>TCG Player</th>
								<th className='py-1'>CardMarket</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='py-1'>Low</td>
								<td className='bg-sky-100 text-red-600 py-1'>${values.lowRec}</td>
								<td className='py-1'>${values.lowtc}</td>
								<td className='py-1'>€{values.lowcar}</td>
							</tr>
							<tr>
								<td className='py-1'>Mid</td>
								<td className='bg-sky-100 text-red-600 py-1'>${values.midRec}</td>
								<td className='py-1'>${values.midtc}</td>
								<td className='py-1'>€{values.midcar}</td>
							</tr>
							<tr>
								<td className='py-1'>High</td>
								<td className='bg-sky-100 text-red-600 py-1'>${values.highRec}</td>
								<td className='py-1'>${values.hightc}</td>
								<td className='py-1'>€{values.highcar}</td>
							</tr>
							<tr className='font-bold'>
								<td className='py-1'>Best</td>
								<td className='bg-sky-100 text-red-600 py-1'>${values.avgRec}</td>
								<td className='py-1'>${values.avgtc}</td>
								<td className='py-1'>€{values.avgcar}</td>
							</tr>
						</tbody>
					</table>
				</div>
			))}
		</div>
	)
}

export default PriceTable