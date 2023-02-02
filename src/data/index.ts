import albumData from "./album";

function useApi() {
  const { albumQuery } = albumData();
  return { albumQuery };
}

export default useApi;
