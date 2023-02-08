import albumData from "./album";
import photoData from "./photo";

function useApi() {
  const { albumQuery, albumsQuery } = albumData();
  const { photosQuery, photoInAlbum } = photoData();
  return { albumQuery, albumsQuery, photosQuery, photoInAlbum };
}

export default useApi;
