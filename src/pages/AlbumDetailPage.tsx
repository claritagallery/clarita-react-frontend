import React from "react"
import AlbumDetail from "../components/AlbumDetail"
import AlbumList from "../components/AlbumList"
import PhotoList from "../components/PhotoList"
import { useParams } from "react-router-dom"
import useApi from "../data"
import useDeviceDetector from "../hooks/useDeviceDetector"

type AlbumDetailParams = {
  albumId: string
}

function AlbumDetailPage() {
  const { albumId } = useParams<keyof AlbumDetailParams>() as AlbumDetailParams
  const { albumQuery, albumsQuery, photosQuery } = useApi()
  const isDesktop = useDeviceDetector()
  const numberOfPhotos = isDesktop ? 50 : 20
  const singleAlbumQuery = albumQuery(albumId)
  const childrenAlbumsQuery = albumsQuery({ parent: albumId, limit: 100 })
  const photos = photosQuery({
    album: albumId,
    limit: 20,
    offset: numberOfPhotos,
  })

  return (
    <>
      <AlbumDetail {...singleAlbumQuery} />
      <AlbumList {...childrenAlbumsQuery} />
      {childrenAlbumsQuery.isSuccess && <hr className="separator" />}
      <PhotoList albumId={albumId} photosQuery={photos} />
    </>
  )
}

export default AlbumDetailPage
