import React, { useEffect } from "react"
import AlbumDetail from "../components/AlbumDetail"
import AlbumList from "../components/AlbumList"
import PhotoList from "../components/PhotoList"
import { useParams } from "react-router-dom"
import useApi from "../data"

type AlbumDetailParams = {
  albumId: string
}

function AlbumDetailPage() {
  const { albumId } = useParams<keyof AlbumDetailParams>() as AlbumDetailParams
  const { albumQuery, albumsQuery, photosQuery, photosQueryInfinite } = useApi()

  const singleAlbumQuery = albumQuery(albumId)
  const childrenAlbumsQuery = albumsQuery({ parent: albumId, limit: 100 })
  const photos = photosQuery({ album: albumId, limit: 5 })
  const infinitePhotos = photosQueryInfinite({
    album: albumId,
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

  console.log(infinitePhotos)
  console.log(photos)

  return (
    <>
      <AlbumDetail {...singleAlbumQuery} />
      <AlbumList {...childrenAlbumsQuery} />
      {photos.isSuccess && childrenAlbumsQuery.isSuccess && <hr className="separator" />}

      <PhotoList albumId={albumId} {...infinitePhotos} />
    </>
  )
}

export default AlbumDetailPage
