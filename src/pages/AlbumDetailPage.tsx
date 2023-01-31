import React from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import AlbumDetail from "../components/AlbumDetail";
import AlbumList from "../components/AlbumList";
import PhotoList from "../components/PhotoList";
import { useParams } from "react-router-dom";

export type APIError = {
  message: string;
} | null;

export interface ListData<T> {
  next: boolean | null | string;
  total: number;
  results: T[]; //sustituye la t por lo que se ponga adentro de las cunas
}

export interface PhotoListItem {
  id: string;
  filename: string;
  name: string;
  date_and_time: string;
}

export interface AlbumListItem {
  id: string;
  name: string;
  date: string;
}

export interface AlbumDetailItem {
  id: string;
  name: string;
  date: string;
  description: string;
  breadcrumbs: {
    id: string;
    name: string;
    date: string;
  }[];
}

export type PhotoListData = ListData<PhotoListItem>;
export type AlbumDetailData = AlbumDetailItem;
export type AlbumListData = ListData<AlbumListItem>; //cambiar el nombre de esto porque es lo mismo que PhotoListData, un nombre que sirva para los dos;
function fetchAlbum(albumId: string) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/album/${albumId}`,
  }).then((res) => res.data);
}

type fetchAlbumsParams = {
  parent?: string;
  limit: number;
};

function fetchAlbums(params: fetchAlbumsParams) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/albums`,
    params: params,
  }).then((res) => res.data);
}

type fetchPhotosParams = {
  album?: string;
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
  const albumQuery = useQuery<AlbumDetailData, APIError>(["album", albumId], () =>
    fetchAlbum(albumId!),
  );
  const childAlbumsQuery = useQuery<AlbumListData, APIError>(
    ["albums", { parent: albumId }],
    () => fetchAlbums({ parent: albumId, limit: 100 }),
  );

  const photosQuery = useQuery<PhotoListData, APIError>(
    ["photos", { album: albumId }],
    () => fetchPhotos({ album: albumId, limit: 50 }),
  );

  if (childAlbumsQuery) {
    console.log(childAlbumsQuery);
  }

  return (
    <>
      <AlbumDetail {...albumQuery} />
      <AlbumList {...childAlbumsQuery} />
      <PhotoList albumId={albumId} {...photosQuery} />
    </>
  );
}

export default AlbumDetailPage;
