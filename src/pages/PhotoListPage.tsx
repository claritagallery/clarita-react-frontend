import React, { useEffect } from "react"
import PhotoList from "../components/PhotoList"
import useApi from "../data"

const PhotoListPage = () => {
  const { photosQuery, photosQueryInfinite } = useApi()

  const photos = photosQuery({ limit: 100 })
  const infinitePhotos = photosQueryInfinite({
    limit: 20,
    offset: 0,
  })
  useEffect(() => {
    function onScroll(event: any) {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (infinitePhotos.hasNextPage) {
          infinitePhotos.fetchNextPage()
        }
      }
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [infinitePhotos])
  //return <PhotoList {...photos} />
  return <PhotoList {...infinitePhotos} />
}

export default PhotoListPage
