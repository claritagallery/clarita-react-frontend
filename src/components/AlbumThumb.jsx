import React from "react";
import { Link } from "react-router-dom";

function AlbumThumb({ album }) {
  return (
    <div>
      <h2>{album.name}</h2>
      <Link to={`/albums/${album.id}`}>Take me to that album</Link>
      <h5>{album.date}</h5>
      <h3>claro que llego {album.name}</h3>
    </div>
  );
}

export default AlbumThumb;
