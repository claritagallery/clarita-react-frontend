import React, { useEffect } from "react"
import {
  APIError,
  fetchPhotosParams,
  PhotoListData,
  FetchPhotoInAlbumParams,
  PhotoData,
  PhotoId,
} from "./types"
import axios from "axios"
import { useQuery, useInfiniteQuery } from "react-query"

function photo() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL

  function fetchPhotoInAlbum({ albumId, photoId }: FetchPhotoInAlbumParams) {
    return axios({
      url: `${baseUrl}/api/v1/albums/${albumId}/photos/${photoId}`,
    }).then((res) => res.data)
  }

  function fetchPhotos(params: fetchPhotosParams) {
    return axios({
      url: `${baseUrl}/api/v1/photos`,
      params: params,
    }).then((res) => {
      const data = res.data as PhotoListData
      const parsedResults = data.results.map((obj) => ({
        ...obj,
        date_and_time: new Date(obj.date_and_time).toISOString().substring(0, 10),
      }))

      return { ...res.data, results: parsedResults }
    })
  }
  ////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////
  const photosQueryInfinite = (params: fetchPhotosParams) => {
    return useInfiniteQuery<PhotoListData, APIError>(
      ["photos", params.limit, params.album, params.offset],
      () => fetchPhotos({ album: params.album, limit: 50, offset: params.offset }),
    )
  }

  useEffect(() => {
    function onScroll(event: any) {
      console.log("si llego")
      let fetching = false
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { scrollHeight, scrollTop, clientHeight } = event?.target.scrollingElement
      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true
        console.log("hola don pepito")
        fetching = false
      }
    }

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  function fetchPhoto(photoId: PhotoId) {
    return axios({
      url: `${baseUrl}/api/v1/photos/${photoId}`,
    }).then((res) => res.data)
  }

  const photosQuery = (params: fetchPhotosParams) => {
    return useQuery<PhotoListData, APIError>(["photos", params.limit, params.album], () =>
      fetchPhotos({ album: params.album, limit: params.limit }),
    )
  }

  const photoInAlbumQuery = ({ albumId, photoId }: FetchPhotoInAlbumParams) => {
    return useQuery<PhotoData, APIError>(["photo-in-album", albumId, photoId], () =>
      fetchPhotoInAlbum({ albumId, photoId }),
    )
  }

  const photoQuery = (photoId: PhotoId) => {
    return useQuery<PhotoData, APIError>(["photo", photoId], () => {
      return fetchPhoto(photoId)
    })
  }

  return { photosQuery, photoInAlbumQuery, photoQuery, photosQueryInfinite }
}

export default photo
