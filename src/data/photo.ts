import {
  APIError,
  fetchPhotosParams,
  PhotoListData,
  FetchPhotoInAlbumParams,
  PhotoData,
  PhotoId,
} from "./types"
import axios from "axios"
import { useQuery } from "react-query"

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
      console.log(parsedResults)
      return { ...res.data, results: parsedResults }
    })
  }

  function fetchPhoto(photoId: PhotoId) {
    return axios({
      url: `${baseUrl}/api/v1/photos/${photoId}`,
    }).then((res) => res.data)
  }

  const photosQuery = (params: fetchPhotosParams) => {
    return useQuery<PhotoListData, APIError>(["photos", params.limit, params.album], () =>
      fetchPhotos({ album: params.album, limit: 50 }),
    )
  }

  const photoInAlbum = ({ albumId, photoId }: FetchPhotoInAlbumParams) => {
    return useQuery<PhotoData, APIError>(["photo-in-album", albumId, photoId], () =>
      fetchPhotoInAlbum({ albumId, photoId }),
    )
  }

  const photoQuery = (photoId: PhotoId) => {
    return useQuery<PhotoData, APIError>(["photo", photoId], () => {
      return fetchPhoto(photoId)
    })
  }

  return { photosQuery, photoInAlbum, photoQuery }
}

export default photo
