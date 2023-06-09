import axios from "axios"
import { useQuery } from "react-query"
import {
  APIError,
  AlbumDetailData,
  AlbumListData,
  DataError,
  fetchAlbumsParams,
} from "./types"

function album() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL

  const fetchAlbums = async (params: fetchAlbumsParams) => {
    const res = await axios({
      url: `${baseUrl}/api/v2/albums`, //cambie 2 en vez de uno, uno correcto
      params: params,
    })
    return res.data
  }

  const albumQuery = (albumId: string) => {
    const query = useQuery<AlbumDetailData, APIError>(["album", albumId], async () => {
      const res = await axios({
        url: `${baseUrl}/api/v2/albums/${albumId}`, //cambie 2 en vez de 1
      })
      return res.data
    })
    if (query.isError) {
      throw new DataError(query.error?.message || "Unknown error")
    }
    return query
  }

  const albumsQuery = (params: fetchAlbumsParams) => {
    const query = useQuery<AlbumListData, APIError>(
      ["albums", params.limit, params.parent],
      () => fetchAlbums(params),
    )
    if (query.isError) {
      throw new DataError(query.error?.message || "Unknown error")
    }
    return query
  }

  return { albumQuery, albumsQuery }
}
export default album
