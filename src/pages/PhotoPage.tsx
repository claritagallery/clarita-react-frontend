import React from "react"
import { useParams } from "react-router-dom"
import useApi from "../data"
import Photo from "../components/Photo"
import useDeviceDetector from "../hooks/useDeviceDetector"

type PhotoPageProps = {
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}
type PhotoDetailParams = {
  photoId: string
  albumId?: string
}
function PhotoPage({ setShowHeader }: PhotoPageProps) {
  const isDesktop = useDeviceDetector()

  const { albumId, photoId } = useParams<keyof PhotoDetailParams>() as PhotoDetailParams
  const { photoInAlbumQuery, photoQuery } = useApi()
  const query = albumId ? photoInAlbumQuery({ albumId, photoId }) : photoQuery(photoId)

  return (
    <Photo
      query={query}
      albumId={albumId}
      isDesktop={isDesktop}
      setShowHeader={setShowHeader}
    />
  )
}
export default PhotoPage
