import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Photo from "../components/Photo"
import { useParams } from "react-router-dom"
import useApi from "../data"

type PhotoInAlbumProps = {
  toggleHeader: React.Dispatch<React.SetStateAction<boolean>>
}

function PhotoInAlbumPage({ toggleHeader }: PhotoInAlbumProps) {
  const [windWidth, setWindWidth] = useState(window.innerWidth)
  console.log(windWidth)
  function isNavShowing() {
    setWindWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", isNavShowing)
    if (windWidth > 900) {
      toggleHeader(true)
    } else {
      toggleHeader(false)
    }
    return () => {
      window.removeEventListener("resize", isNavShowing)
      toggleHeader(true)
    }
  }, [toggleHeader, windWidth])

  const { albumId, photoId } = useParams()
  const { photoInAlbum } = useApi()
  if (!albumId || !photoId) {
    console.warn("empty props in PhotoInAlbumPage")
    return null
    console.warn("empty props in PhotoInAlbumPage")
    return null
  }
  const { data, error, isError, isLoading } = photoInAlbum({ albumId, photoId })

  if (isLoading) {
    return <h1>Info is loading</h1>
    return <h1>Info is loading</h1>
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  return <Photo photo={data} albumId={albumId} />
}

export default PhotoInAlbumPage
