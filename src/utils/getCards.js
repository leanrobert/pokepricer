import axios from "axios"
import { load } from "cheerio"
import prisma from "../../db/client"

export const getCardsNoFilter = async (page) => {
  const res = await prisma.pokemoncard.findMany({
    include: {
      cardset: true
    },
    skip: (Number(page) - 1) * 10,
    take: 10
  })

  return res
}


export const getCards = async (search) => {
  const res = await prisma.pokemoncard.findMany({
    where: {
      name: {
        contains: search,
        mode: 'insensitive'
      }
    },
    include: {
      cardset: true
    },
    orderBy: {
      cardset: {
        releasedate: 'desc'
      }
    }
  })

  return res
}

export const getCard = async (id) => {
  const res = await prisma.pokemoncard.findUnique({
    where: {
      id
    },
    include: {
      cardattacks: true,
      cardset: true
    }
  })

  return res
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
      } else if (href?.includes(`promos/${reeplaceName(cardName, '-')}-${cardNum}`)) {
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
    console.error(error);
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