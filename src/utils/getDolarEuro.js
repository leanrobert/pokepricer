export const getDolarEuro = async () => {
  const res = await fetch('https://api.bluelytics.com.ar/v2/latest', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}

export const getTableValues = (tcg, card, money) => {
  const res = []

  if (!tcg || !tcg.prices) {
    const data = {}

    data.lowtc = 0
    data.midtc = 0
    data.hightc = 0
    data.avgtc = 0

    if (!card || !card.prices) {
      data.lowcar = 0
      data.midcar = 0
      data.highcar  = 0
      data.avgcar = 0
    } else {
      data.lowcar = card.prices.averageSellPrice
      data.midcar = card.prices.avg1
      data.highcar  = card.prices.avg7
      data.avgcar = card.prices.avg30
    }

    data.lowRec = Number(money.blue_euro.value_sell * data.lowcar).toFixed(2)
    data.midRec = Number(money.blue_euro.value_sell * data.midcar).toFixed(2)
    data.highRec = Number(money.blue_euro.value_sell * data.highcar).toFixed(2)
    data.avgRec = Number(money.blue_euro.value_sell * data.avgcar).toFixed(2)

    res.push(data)
  } else {
    for (let price in tcg?.prices) {
      const data = {}

      data.lowtc = tcg.prices[`${price}`].low
      data.midtc = tcg.prices[`${price}`].mid
      data.hightc = tcg.prices[`${price}`].high
      data.avgtc = tcg.prices[`${price}`].market

      if (!card || !card.prices) {
        data.lowcar = 0
        data.midcar = 0
        data.highcar  = 0
        data.avgcar = 0
      } else {
        data.lowcar = card.prices.averageSellPrice
        data.midcar = card.prices.avg1
        data.highcar  = card.prices.avg7
        data.avgcar = card.prices.avg30
      }

      data.lowRec = Number(money.blue.value_sell * data.lowtc + money.blue_euro.value_sell * data.lowcar).toFixed(2)
      data.midRec = Number(money.blue.value_sell * data.midtc + money.blue_euro.value_sell * data.midcar).toFixed(2)
      data.highRec = Number(money.blue.value_sell * data.hightc + money.blue_euro.value_sell * data.highcar).toFixed(2)
      data.avgRec = Number(money.blue.value_sell * data.avgtc + money.blue_euro.value_sell * data.avgcar).toFixed(2)

      data.name = price

      res.push(data)
    }
  }

  return res
}