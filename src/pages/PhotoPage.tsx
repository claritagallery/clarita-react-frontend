import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useApi from "../data"
import Photo from "../components/Photo"

type PhotoPageProps = {
  toggleHeader: React.Dispatch<React.SetStateAction<boolean>>
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

  const { albumId, photoId } = useParams<{ albumId: string; photoId: string }>()

  const { photoInAlbum, photoQuery } = useApi()
  if (!albumId) {
    const { data, error, isError, isLoading } = photoQuery(photoId)

    if (isLoading) {
      return <h1>Its loading</h1>
    }

    if (isError) {
      return <div>{error ? error.message : "Unknown error"}</div>
    }

    return data ? (
      <>
        {" "}
        <Photo photo={data} />{" "}
      </>
    ) : (
      <h1>No Photos here</h1>
    )
  } else if (albumId && photoId) {
    const { data, error, isError, isLoading } = photoInAlbum({ albumId, photoId })

    if (isLoading) {
      return <h1>Info is loading</h1>
    }

    if (isError) {
      return <div>{error ? error.message : "Unknown error"}</div>
    }
    if (data) {
      return <Photo photo={data} albumId={albumId} />
    }
    return <h1>No Photos here</h1>
  }
  return <h1>No photos here</h1>
}
export default PhotoPage
