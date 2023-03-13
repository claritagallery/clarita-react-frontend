function getRandomPic() {
  const imgSrc =
    "https://source.unsplash.com/random/3000x3000" +
    Math.floor(Math.random() * 3000) +
    2800;

  return imgSrc;
}

export default getRandomPic;
