import axios from "axios"
import { useQuery } from "react-query"
import { APIError, AlbumDetailData, AlbumListData, FetchAlbumsParams } from "./types"

function album() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL

  const fetchAlbums = async (params: FetchAlbumsParams) => {
    const res = await axios({
      url: `${baseUrl}/api/v1/albums`,
      params: params,
    })
    return res.data
  }

  const albumQuery = (albumId: string) => {
    const query = useQuery<AlbumDetailData, APIError>(["album", albumId], async () => {
      const res = await axios({
        url: `${baseUrl}/api/v1/albums/${albumId}`,
      })
      return res.data
    })
    return query
  }

  const albumsQuery = (params: FetchAlbumsParams) => {
    const query = useQuery<AlbumListData, APIError>(
      ["albums", params.limit, params.parent],
      () => fetchAlbums(params),
    )
    return query
  }

  return { albumQuery, albumsQuery }
}
export default album
