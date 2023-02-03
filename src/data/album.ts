import axios from "axios";
import { useQuery } from "react-query";
import { APIError, AlbumDetailData, AlbumListData } from "./types";

function album() {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const albumQuery = (albumId: string) => {
    return useQuery<AlbumDetailData, APIError>(["album", albumId], async () => {
      const res = await axios({
        url: `${baseUrl}/api/v1/album/${albumId}`,
      });
      return res.data;
    });
  };

  const albumsQuery = () => {
    return useQuery<AlbumListData, APIError>("albums", async () => {
      const res = await axios({
        url: `${baseUrl}/api/v1/albums`,
        params: { limit: 100 },
      });
      return res.data;
    });
  };
  return { albumQuery, albumsQuery };
}
export default album;
