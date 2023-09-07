import { PrismaClient } from "@prisma/client"
import axios from "axios"
import { load } from "cheerio"
import { pokemonCards } from "../../extra/pokemonCard"

const prisma = new PrismaClient()

export const getCards = async (search, page=1, limit=10) => {
  const skip = (Number(page) - 1) * Number(limit)

  /* const res = await prisma.pokemoncard.findMany({
    where: {
      name: {
        contains: search
      }
    },
    skip: skip,
    take: limit,
    include: {
      cardset: true
    }
  }) */
  const res = await pokemonCards.slice(skip, Number(skip) + Number(limit))

  return res
}

export const getCard = async (id) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY
    }
  })
  const data = await res.json()
  return data.data
}

export const getSets = async () => {
  const res = await prisma.cardset.findMany({
    orderBy: {
      releasedate: 'desc'
    },
  })

  return res
}

export const getCardsBySet = async (setId) => {
  const res = await prisma.pokemoncard.findMany({
    where: {
      set_id: setId
    },
    include: {
      cardset: true
    }
  })

  return res
}

export const getTrollPrice = async (cardName, cardNum, setNum) => {
	const url = `https://www.trollandtoad.com/category.php?selected-cat=0&search-words=${reeplaceName(cardName, '+')}`

  try {
    const { data } = await axios.get(url)
    const $ = load(data)
    const filteredHref = []
    $('a').each(function () {
      const href = $(this).attr('href')
      if (href?.includes(`singles/${reeplaceName(cardName, '-')}-${cardNum}-${setNum}`)) {
        filteredHref.push(href)
      } else if (href?.includes(`promos/${reeplaceName(cardName, '-')}-${cardNum.toLowerCase()}`)) {
        filteredHref.push(href)
      }
    })

    const url2 = `https://www.trollandtoad.com${filteredHref[0]}`
    const data2 = await axios.get(url2)
    const $2 = load(data2.data)
    const scriptTag = $2('script[type="application/ld+json"]').html();
    const jsonObj = JSON.parse(scriptTag)

    const price = jsonObj.offers[0].price
    return price
  } catch (error) {
    return 'Not Found'
  }
}

const reeplaceName = (string, joiner) => {
  return string
    .replace("LV.X", `lv${joiner}x`)
    .replace("★", `gold${joiner}star`)
    .replace("'", " ")
    .replace(/\s+/g, joiner)
    .replace(/&/g, '')
    .replace(/[-+]/g, joiner)
    .replace(/[-+]{2,}/g, joiner)
    .replace("δ",`delta${joiner}species`)
    .toLowerCase()
}