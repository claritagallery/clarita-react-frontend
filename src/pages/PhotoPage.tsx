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
  const { data, error, isError, isLoading } = albumId
    ? photoInAlbumQuery({ albumId, photoId })
    : photoQuery(photoId)

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  return (
    <Photo
      photo={data}
      albumId={albumId}
      isLoading={isLoading}
      isDesktop={isDesktop}
      setShowHeader={setShowHeader}
    />
  )
}
export default PhotoPage
