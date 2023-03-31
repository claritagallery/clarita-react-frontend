import React from "react"
import axios from "axios"
import { Image, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useQuery } from "react-query"
import Photo from "../components/Photo"
import PhotoThumb from "../components/PhotoThumb"
import { useParams } from "react-router-dom"

type FetchPhotoInAlbumParams = {
  albumId: string
  photoId: string
}

function fetchPhotoInAlbum({ albumId, photoId }: FetchPhotoInAlbumParams) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/album/${albumId}/photo/${photoId}`,
  }).then((res) => res.data)
}

function PhotoInAlbumPage() {
  const { albumId, photoId } = useParams()
  if (!albumId || !photoId) {
    console.warn("empty props in PhotoInAlbumPage")
    return null
  }

  const { data, error, isError, isLoading } = useQuery(
    ["photo-in-album", albumId, photoId],
    () => fetchPhotoInAlbum({ albumId, photoId }),
  )

  if (isLoading) {
    return <h1>Info is loading</h1>
  }

  if (isError) {
    return <div>el eerror</div>
  }

  return <Photo photo={data} albumId={albumId} />
}

export default PhotoInAlbumPage
