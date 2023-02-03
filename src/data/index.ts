import albumData from "./album";

function useApi() {
  const { albumQuery, albumsQuery } = albumData();
  return { albumQuery, albumsQuery };
}

export default useApi;
