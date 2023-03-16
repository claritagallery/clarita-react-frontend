import React from "react";

import { Link } from "react-router-dom";
import Photo from "../components/Photo";
//import PhotoThumb from "../components/PhotoThumb";
import { useParams } from "react-router-dom";
import useApi from "../data";

function PhotoInAlbumPage() {
  const { albumId, photoId } = useParams();
  const { photoInAlbum } = useApi();
  if (!albumId || !photoId) {
    console.warn("empty props in PhotoInAlbumPage");
    return null;
  }
  const { data, error, isError, isLoading } = photoInAlbum({ albumId, photoId });

  if (isLoading) {
    return <h1>Info is loading</h1>;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }

  return <Photo photo={data} albumId={albumId} />;
}

export default PhotoInAlbumPage;
