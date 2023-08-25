import { getTableValues } from '@/utils/getDolarEuro'
import React from 'react'

const PriceTable = ({ tcgplayer, cardmarket, money }) => {
	const data = getTableValues(tcgplayer, cardmarket, money)

	return (
		<div className='flex flex-col gap-4'>
			{data.map((values, index) => (
			<div key={index}>
				<h3 className='capitalize text-center font-bold'>{values.name}</h3>
			<table  className='table-fixed w-full text-center '>
				<thead>
					<tr>
						<th />
						<th className='bg-amber-50 text-red-700'>Recomended (ARS)</th>
						<th>TCG Player</th>
						<th>CardMarket</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Low</td>
						<td className='bg-amber-50 text-red-700'>ARS ${values.lowRec}</td>
						<td>${values.lowtc}</td>
						<td>€{values.lowcar}</td>
					</tr>
					<tr>
						<td>Mid</td>
						<td className='bg-amber-50 text-red-700'>ARS ${values.midRec}</td>
						<td>${values.midtc}</td>
						<td>€{values.midcar}</td>
					</tr>
					<tr>
						<td>High</td>
						<td className='bg-amber-50 text-red-700'>ARS ${values.highRec}</td>
						<td>${values.hightc}</td>
						<td>€{values.highcar}</td>
					</tr>
					<tr>
						<td>Recomended</td>
						<td className='bg-amber-50 text-red-700 font-bold'>ARS ${values.avgRec}</td>
						<td>${values.avgtc}</td>
						<td>€{values.avgcar}</td>
					</tr>
				</tbody>
			</table>
			</div>
			))}

		</div>
	)
}

export default PriceTable