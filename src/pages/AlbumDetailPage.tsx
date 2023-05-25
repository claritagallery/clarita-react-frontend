import React from "react"
import AlbumDetail from "../components/AlbumDetail"
import AlbumList from "../components/AlbumList"
import PhotoList from "../components/PhotoList"
import { useParams } from "react-router-dom"
import useApi from "../data"
import { AlbumListData } from "../data/types"
type AlbumDetailParams = {
  albumId: string
}

function AlbumDetailPage() {
  const { albumId } = useParams<keyof AlbumDetailParams>() as AlbumDetailParams
  const { albumQuery, albumsQuery, photosQuery, photosQueryInfinite } = useApi()

  const singleAlbumQuery = albumQuery(albumId)
  const childrenAlbumsQuery = albumsQuery({ parent: albumId, limit: 100 })
  const photos = photosQuery({ album: albumId, limit: 5 })
  const photosStartingPoint = photos.data ? photos.data.results.length : 0
  const infinitePhotos = photosQueryInfinite({
    album: albumId,
    limit: 50,
    offset: photosStartingPoint,
  })
  const infinitePhotosData = infinitePhotos.data
    ? infinitePhotos.data.pages[0].results
    : undefined

  console.log(photos)
  // console.log(infinitePhotos)
  console.log(photosStartingPoint)
  console.log(infinitePhotosData)

  return (
    <>
      <AlbumDetail {...singleAlbumQuery} />
      <AlbumList {...childrenAlbumsQuery} />
      {photos.isSuccess && childrenAlbumsQuery.isSuccess && <hr className="separator" />}
      <PhotoList albumId={albumId} {...photos} />
    </>
  )
}

export default AlbumDetailPage
