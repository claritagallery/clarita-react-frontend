import React from "react"
import PhotoList from "../components/PhotoList"
import useApi from "../data"
import useDeviceDetector from "../hooks/useDeviceDetector"
const PhotoListPage = () => {
  const isDesktop = useDeviceDetector()
  const { photosQuery } = useApi()
  const numberOfPhotos = isDesktop ? 50 : 20
  const photos = photosQuery({
    limit: 20,
    offset: numberOfPhotos,
  })

  return <PhotoList photosQuery={photos} />
}

export default PhotoListPage
