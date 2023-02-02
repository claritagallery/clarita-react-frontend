import axios from "axios";
import { useQuery } from "react-query";
import { APIError, AlbumDetailData, AlbumListData } from "./types";

function album() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const albumQuery = (albumId: string) => {
    return useQuery<AlbumDetailData, APIError>(["album", albumId], () => {
      return axios({
        url: `${baseUrl}/api/v1/album/${albumId}`,
      }).then((res) => res.data);
    });
  };
  return { albumQuery };
}
export default album;
