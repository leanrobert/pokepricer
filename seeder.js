import { PrismaClient } from "@prisma/client";
import { fecthCardsForSetPage2, fetchCardsForSet, fetchSets } from "./db/endpoints.js";

const prisma = new PrismaClient();

export const seedCardSets = async () => {
  const sets = await fetchSets();

  for (const set of sets) {
    await prisma.cardset.create({
      data: {
        id: set.id,
        name: set.name,
        series: set.series,
				printedtotal: set.printedTotal,
				total: set.total,
				legalities_unlimited: set.legalities.unlimited,
				legalities_expanded: set.legalities.expanded,
				ptcgocode: set.ptcgoCode,
				releasedate: new Date(set.releaseDate),
				updatedat: new Date(set.updatedAt),
				images_symbol: set.images.symbol,
				images_logo: set.images.logo,
      },
    });
  }
};

export const seedPokemonCards = async () => {
  const sets = await fetchSets();

  for (const set of sets) {
    const cards = await fetchCardsForSet(set.id);

    for (const card of cards) {
      await prisma.pokemoncard.create({
				data: {
					id: card.id,
					name: card.name,
					supertype: card.supertype,
					subtypes: card.subtypes?.join(', '),
					rules: card.rules?.join(', '),
					set_id: card.set.id,
					number: Number(card.number),
					artist: card.artist,
					rarity: card.rarity,
					legalities_unlimited: card.legalities.unlimited,
					images_small: card.images.small,
					images_large: card.images.large,
					legalities_expanded: card.legalities.expanded,
					legalities_standard: card.legalities.standard,
					regulationmark: card.regulationMark,
					level: Number(card.level),
					hp: Number(card.hp),
					types: card.types?.join(', '),
					evolvesto: card.types?.join(', '),
					weaknesses_type: card.weaknesses?.type,
					weaknesses_value: card.weaknesses?.value,
					retreatcost: card.retreatCost?.join(', '),
					convertedretreatcost: card.convertedRetreatCost,
					flavortext: card.flavorText,
					nationalpokedexnumbers: Number(card.nationalPokedexNumbers?.shift()),
					resistances_type: card.resistances?.map(resistance => resistance.type).join(', '),
					resistances_value: Number(card.resistances?.map(resistance => resistance.value).join(', ')),
					evolvesfrom: card.evolvesFrom,
				},
			})

			card.attacks?.forEach(async (attack) => {
				await prisma.cardattacks.create({
					data: {
						attacks_name: attack.name,
						attacks_cost: attack.cost.join(', '),
						attacks_convertedenergycost: attack.convertedEnergyCost,
						attacks_damage: attack.damage,
						attacks_text: attack.text,
						pokemoncard_id: card.id,
					}
				})
			})

			card.abilities?.forEach(async (ability) => {
				await prisma.cardattacks.create({
					data: {
						abilities_name: ability.name,
						abilities_text: ability.text,
						abilities_type: ability.type,
						pokemoncard_id: card.id,
					}
				})
			})
    }
  }
};

export const seedPokemonCardsPage2 = async () => {
	const sets = ['sm11', 'sm12', 'swsh8', 'sv1', 'sv2']

  sets.map(async (set) => {
		const cards = await fecthCardsForSetPage2(set);

    for (const card of cards) {
      await prisma.pokemoncard.create({
				data: {
					id: card.id,
					name: card.name,
					supertype: card.supertype,
					subtypes: card.subtypes?.join(', '),
					rules: card.rules?.join(', '),
					set_id: set,
					number: Number(card.number),
					artist: card.artist,
					rarity: card.rarity,
					legalities_unlimited: card.legalities.unlimited,
					images_small: card.images.small,
					images_large: card.images.large,
					legalities_expanded: card.legalities.expanded,
					legalities_standard: card.legalities.standard,
					regulationmark: card.regulationMark,
					level: Number(card.level),
					hp: Number(card.hp),
					types: card.types?.join(', '),
					evolvesto: card.types?.join(', '),
					weaknesses_type: card.weaknesses?.type,
					weaknesses_value: card.weaknesses?.value,
					retreatcost: card.retreatCost?.join(', '),
					convertedretreatcost: card.convertedRetreatCost,
					flavortext: card.flavorText,
					nationalpokedexnumbers: Number(card.nationalPokedexNumbers?.shift()),
					resistances_type: card.resistances?.map(resistance => resistance.type).join(', '),
					resistances_value: Number(card.resistances?.map(resistance => resistance.value).join(', ')),
					evolvesfrom: card.evolvesFrom,
				},
			})

			card.attacks?.forEach(async (attack) => {
				await prisma.cardattacks.create({
					data: {
						attacks_name: attack.name,
						attacks_cost: attack.cost.join(', '),
						attacks_convertedenergycost: attack.convertedEnergyCost,
						attacks_damage: attack.damage,
						attacks_text: attack.text,
						pokemoncard_id: card.id,
					}
				})
			})

			card.abilities?.forEach(async (ability) => {
				await prisma.cardattacks.create({
					data: {
						abilities_name: ability.name,
						abilities_text: ability.text,
						abilities_type: ability.type,
						pokemoncard_id: card.id,
					}
				})
			})
    }
  })
};

async function main() {
	await seedCardSets();
	await seedPokemonCards();
	await seedPokemonCardsPage2();
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
	})
