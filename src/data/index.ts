import albumData from "./album"
import photoData from "./photo"

function useApi() {
  const { albumQuery, albumsQuery } = albumData()
  const { photosQuery, photoInAlbumQuery, photoQuery } = photoData()
  return { albumQuery, albumsQuery, photosQuery, photoInAlbumQuery, photoQuery }
}

export default useApi
