import albumData from "./album";
import photoData from "./photo";

function useApi() {
  const { albumQuery, albumsQuery } = albumData();
  const { photosQuery, photoInAlbum, photoQuery } = photoData();
  return { albumQuery, albumsQuery, photosQuery, photoInAlbum, photoQuery };
}

export default useApi;
