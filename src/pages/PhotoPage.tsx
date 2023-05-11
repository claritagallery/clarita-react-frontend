import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useApi from "../data"
import Photo from "../components/Photo"

type PhotoPageProps = {
  setIsBigScreen: React.Dispatch<React.SetStateAction<boolean>>
  isBigScreen: boolean
}
type PhotoDetailParams = {
  photoId: string
  albumId?: string
}
function PhotoPage({ setIsBigScreen, isBigScreen }: PhotoPageProps) {
  const [windWidth, setWindWidth] = useState(window.innerWidth)
  function isNavShowing() {
    setWindWidth(window.innerWidth)
  }

  useEffect(() => {
    // setIsBigScreen(false)
    window.addEventListener("resize", isNavShowing)
    if (windWidth > 900) {
      setIsBigScreen(true)
    } else {
      setIsBigScreen(false)
    }
    return () => {
      setIsBigScreen(true)
      window.removeEventListener("resize", isNavShowing)
    }
  }, [setIsBigScreen, windWidth, isNavShowing])

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
      setIsBigScreen={setIsBigScreen}
      isBigScreen={isBigScreen}
    />
  )
}
export default PhotoPage
