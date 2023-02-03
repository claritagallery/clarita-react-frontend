import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Spinner } from "react-bootstrap";
import AlbumList from "../components/AlbumList";
import useApi from "../data";

const AlbumListPage = () => {
  const { albumsQuery } = useApi();
  const query = albumsQuery();
  return <AlbumList {...query} />;
};

export default AlbumListPage;
