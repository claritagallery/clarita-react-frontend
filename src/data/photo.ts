import React from "react"
import {
  APIError,
  FetchPhotosParams,
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

  function fetchPhotos(params: FetchPhotosParams) {
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

  const photosQuery = ({ album, limit, offset }: FetchPhotosParams) => {
    const query = useInfiniteQuery<PhotoListData, APIError>(
      ["photos", album, limit, offset],
      ({ pageParam }) => fetchPhotos({ album, limit, offset: pageParam }),
      {
        getNextPageParam: (lastPage) => lastPage.next,
        refetchOnWindowFocus: false,
      },
    )
    return query
  }

  function fetchPhoto(photoId: PhotoId) {
    return axios({
      url: `${baseUrl}/api/v1/photos/${photoId}`,
    }).then((res) => res.data)
  }

  const photoInAlbumQuery = ({ albumId, photoId }: FetchPhotoInAlbumParams) => {
    const query = useQuery<PhotoData, APIError>(
      ["photo-in-album", albumId, photoId],
      () => fetchPhotoInAlbum({ albumId, photoId }),
    )
    return query
  }

  const photoQuery = (photoId: PhotoId) => {
    const query = useQuery<PhotoData, APIError>(["photo", photoId], () => {
      return fetchPhoto(photoId)
    })
    return query
  }

  return { photosQuery, photoInAlbumQuery, photoQuery }
}

export default photo
