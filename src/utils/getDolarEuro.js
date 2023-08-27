export const getDolarEuro = async () => {
  const res = await fetch('https://api.bluelytics.com.ar/v2/latest', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export const getTableValues = (tcg, card) => {
  const res = []

  if (!tcg || !tcg.prices) {
    const data = {}
    data.tcgp = 0

    if (!card || !card.prices) {
      data.cardmar = 0
    } else {
      data.cardmar = card.prices.averageSellPrice
    }

    res.push(data)
  } else {
    for (let price in tcg?.prices) {
      const data = {}

      data.tcgp = tcg.prices[`${price}`].market

      if (!card || !card.prices) {
        data.cardmar = 0
      } else {
        data.cardmar = card.prices.averageSellPrice
      }

      data.name = price

      res.push(data)
    }
  }

  return res
}