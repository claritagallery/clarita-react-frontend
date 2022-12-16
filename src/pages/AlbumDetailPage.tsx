import React from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import AlbumDetail from "../components/AlbumDetail";
import AlbumList from "../components/AlbumList";
import PhotoList from "../components/PhotoList";
import { useParams } from "react-router-dom";

function fetchAlbum(albumId: string) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/album/${albumId}`,
  }).then((res) => res.data);
}

type fetchAlbumsParams = {
  parent: string;
  limit: number;
};

function fetchAlbums(params: fetchAlbumsParams) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/albums`,
    params: params,
  }).then((res) => res.data);
}

type fetchPhotosParams = {
  album: string;
  limit: number;
};

function fetchPhotos(params: fetchPhotosParams) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/photos`,
    params: params,
  }).then((res) => res.data);
}

function AlbumDetailPage() {
  const { albumId } = useParams();
  const albumQuery = useQuery(["album", albumId], () => fetchAlbum(albumId!));
  const childAlbumsQuery = useQuery(["albums", { parent: albumId }], () =>
    fetchAlbums({ parent: albumId!, limit: 100 }),
  );
  const photosQuery = useQuery(["photos", { album: albumId }], () =>
    fetchPhotos({ album: albumId!, limit: 50 }),
  );

  return (
    <>
      <AlbumDetail {...albumQuery} />
      <AlbumList {...childAlbumsQuery} />
      <PhotoList {...photosQuery} albumId={albumId} />
    </>
  );
}

export default AlbumDetailPage;
