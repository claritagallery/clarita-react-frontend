import albumData from "./album"
import photoData from "./photo"

function useApi() {
  const { albumQuery, albumsQuery } = albumData()
  const { photosQuery, photoInAlbumQuery, photoQuery, photosQueryInfinite } = photoData()
  return {
    albumQuery,
    albumsQuery,
    photosQuery,
    photoInAlbumQuery,
    photoQuery,
    photosQueryInfinite,
  }
}

export default useApi
