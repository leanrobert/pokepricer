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
  const res = await fetch('https://api.pokemontcg.io/v2/sets', {
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