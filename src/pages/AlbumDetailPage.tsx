import React from "react";
import AlbumDetail from "../components/AlbumDetail";
import AlbumList from "../components/AlbumList";
import PhotoList from "../components/PhotoList";
import { useParams } from "react-router-dom";
import useApi from "../data";
import { AlbumListData } from "../data/types";
type AlbumDetailParams = {
  albumId: string;
};

function AlbumDetailPage() {
  const { albumId } = useParams<keyof AlbumDetailParams>() as AlbumDetailParams;
  const { albumQuery, albumsQuery, photosQuery } = useApi();

  const singleAlbumQuery = albumQuery(albumId);
  const childAlbumsQuery = albumsQuery({ parent: albumId, limit: 100 });
  const photos = photosQuery({ album: albumId, limit: 50 });

  return (
    <>
      <AlbumDetail {...singleAlbumQuery} />
      <AlbumList {...childAlbumsQuery} />
      <PhotoList albumId={albumId} {...photos} />
    </>
  );
}

export default AlbumDetailPage;
