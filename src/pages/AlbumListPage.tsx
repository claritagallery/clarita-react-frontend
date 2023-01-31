import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Spinner } from "react-bootstrap";
import AlbumList from "../components/AlbumList";
import { APIError, AlbumListData } from "./AlbumDetailPage";

function fetchAlbums() {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/albums`,
    params: { limit: 100 },
  }).then((res) => res.data);
}

const AlbumListPage = () => {
  const albumsQuery = useQuery<AlbumListData, APIError>("albums", fetchAlbums);
  console.log(albumsQuery);
  return <AlbumList {...albumsQuery} />;
};

export default AlbumListPage;
