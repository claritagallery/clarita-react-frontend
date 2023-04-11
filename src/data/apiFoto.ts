function getRandomPic() {
  const height = Math.floor(Math.random() * 300) + 100
  const width = Math.floor(Math.random() * 300) + 100
  const imgSrc = `https://source.unsplash.com/random/${width}x${height}`

  return { imgSrc, height, width }
}

export default getRandomPic
