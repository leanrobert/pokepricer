import axios from "axios"
import { load } from "cheerio"

export const getCards = async (search) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${search.split(" ").join("*")}`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY
    }
  })
  const data = await res.json()
  return data.data
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
  const res = await fetch('https://api.pokemontcg.io/v2/sets?orderBy=-releaseDate', {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY
    }
  })
  const data = await res.json()
  return data.data
}

export const getCardsBySet = async (setId) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY
    }
  })

  const data = await res.json()
  return data.data
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