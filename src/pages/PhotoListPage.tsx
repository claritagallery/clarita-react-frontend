import React, { useEffect } from "react"
import PhotoList from "../components/PhotoList"
import useApi from "../data"

const PhotoListPage = () => {
  const { photosQuery } = useApi()

  const photos = photosQuery({
    limit: 20,
    offset: 0,
  })

  return <PhotoList photoQuery={photos} />
}

export default PhotoListPage
