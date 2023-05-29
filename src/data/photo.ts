import React from "react"
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

  const photosQuery = ({ album, limit, offset }: fetchPhotosParams) => {
    return useInfiniteQuery<PhotoListData, APIError>(
      ["photos", album, limit, offset],
      ({ pageParam }) => fetchPhotos({ album, limit, offset: pageParam }),
      {
        getNextPageParam: (lastPage, allPages) => lastPage.next,
      },
    )
  }

  function fetchPhoto(photoId: PhotoId) {
    return axios({
      url: `${baseUrl}/api/v1/photos/${photoId}`,
    }).then((res) => res.data)
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

  return { photosQuery, photoInAlbumQuery, photoQuery }
}

export default photo
