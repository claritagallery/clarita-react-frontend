import React from "react";
import { Link } from "react-router-dom";
import { AlbumListItem } from "../data/types";
import photoTemporal from "../assets/fide.jpg";

interface AlbumParams {
  album: AlbumListItem;
}

function AlbumThumb({ album }: AlbumParams) {
  console.log(album);
  return (
    <div>
      <h1>{album.name}</h1>
      <Link to={`/albums/${album.id}`}>Take me to that album</Link>
      <img src={photoTemporal} alt="fidel" />
      <h5>{album.date}</h5>
    </div>
  );
}

export default AlbumThumb;
