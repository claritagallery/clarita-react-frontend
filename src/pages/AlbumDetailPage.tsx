import React from "react";

import AlbumDetail from "../components/AlbumDetail";
import AlbumList from "../components/AlbumList";
import PhotoList from "../components/PhotoList";
import { useParams } from "react-router-dom";
import useApi from "../data";

function AlbumDetailPage() {
  const { albumId } = useParams();
  const { albumQuery, albumsQuery, photosQuery } = useApi();
  const singleAlbum = albumId ? albumQuery(albumId) : null;
  const childAlbumsQuery = albumsQuery({ parent: albumId, limit: 100 });
  const photos = photosQuery({ album: albumId, limit: 50 });

  return (
    <>
      <h2 className="subtitle">Detalles del album</h2>
      {singleAlbum && <AlbumDetail {...singleAlbum} />}
      <AlbumList {...childAlbumsQuery} />
      <PhotoList albumId={albumId} {...photos} />
    </>
  );
}

export default AlbumDetailPage;
