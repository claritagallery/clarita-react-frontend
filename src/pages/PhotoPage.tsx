import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useApi from "../data"
import Photo from "../components/Photo"

type PhotoPageProps = {
  toggleHeader: React.Dispatch<React.SetStateAction<boolean>>
}
type PhotoDetailParams = {
  photoId: string
  albumId?: string
}
function PhotoPage({ toggleHeader }: PhotoPageProps) {
  const [windWidth, setWindWidth] = useState(window.innerWidth)
  function isNavShowing() {
    setWindWidth(window.innerWidth)
  }

  useEffect(() => {
    toggleHeader(false)
    window.addEventListener("resize", isNavShowing)
    if (windWidth > 900) {
      toggleHeader(true)
    } else {
      toggleHeader(false)
    }
    return () => {
      toggleHeader(true)
      window.removeEventListener("resize", isNavShowing)
    }
  }, [toggleHeader, windWidth])

  const { albumId, photoId } = useParams<keyof PhotoDetailParams>() as PhotoDetailParams
  const { photoInAlbumQuery, photoQuery } = useApi()
  const { data, error, isError, isLoading } = albumId
    ? photoInAlbumQuery({ albumId, photoId })
    : photoQuery(photoId)

  if (isLoading) {
    return <h1>Its loading</h1>
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  return data ? (
    <>
      {" "}
      <Photo photo={data} albumId={albumId} />{" "}
    </>
  ) : (
    <h1>No Photos here</h1>
  )
}
export default PhotoPage
