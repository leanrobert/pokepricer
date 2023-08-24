export const getDolarEuro = async () => {
  const res = await fetch('https://api.bluelytics.com.ar/v2/latest', {
    next: {
      revalidate: 60
    }
  })

  return res.json()
}