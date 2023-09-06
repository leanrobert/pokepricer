import { PrismaClient } from '@prisma/client';
import { fetchSets, fetchCardsForSet } from '../api/pokemonApi';

const prisma = new PrismaClient();

export const seedCardSets = async () => {
  const sets = await fetchSets();

  for (const set of sets) {
    await prisma.cardSet.create({
      data: {
        id: set.id,
        name: set.name,
        series: set.series,
				printedTotal: set.printedTotal,
				total: set.total,
				legalities_unlimited: set.legalities.unlimited,
				legalities_expanded: set.legalities.expanded,
				ptcgoCode: set.ptcgoCode,
				releaseDate: set.releaseDate,
				updatedAt: set.updatedAt,
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
      await prisma.pokemonCard.create({
        data: {
          id: card.id,
					name: card.name,
					supertype: card.supertype,
					subtypes: card.subtypes.join(),
					rules: card.rules.join(),
					set_id: card.set.id,
					number: card.number,
					artist: card.artist,
					rarity: card.rarity,
					legalities_unlimited: card.legalities.unlimited,
					images_small: card.images.small,
					images_large: card.images.large,
					legalities_expanded: card.legalities.expanded,
					legalities_standard: card.legalities.standard,
					regulationMark: card.regulationMark,
					level: card.level,
					hp: card.hp,
					types: card.types.join(),
					evolvesTo: card.types.join(),
					attacks_name: card.attacks.map(attack => attack.name).join(),
					attacks_cost: card.attacks.map(attack => attack.cost.join("-")).join(),
					attacks_convertedEnergyCost: card.attacks.map(attack => attack.convertedEnergyCost).join(),
					attacks_damage: card.attacks.map(attack => attack.damage).join(),
					attacks_text: card.attacks.map(attack => attack.text).join(),
					weaknesses_type: card.weaknesses.type,
					weaknesses_value: card.weaknesses.value,
					retreatCost: card.retreatCost.join(),
					convertedRetreatCost: card.convertedRetreatCost,
					flavorText: card.flavorText,
					nationalPokedexNumbers: card.nationalPokedexNumbers.join(),
					resistances_type: card.resistances.map(resistance => resistance.type).join(),
					resistances_value: card.resistances.map(resistance => resistance.value).join(),
					abilities_name: card.abilities.map(ability => ability.name).join(),
					abilities_text: card.abilities.map(ability => ability.text).join(),
					abilities_type: card.abilities.map(ability => ability.type).join(),
					evolvesFrom: card.evolvesFrom,
        },
      });
    }
  }
};