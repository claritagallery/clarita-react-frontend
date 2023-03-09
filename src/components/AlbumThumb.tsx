import React from "react";
import { Link } from "react-router-dom";
import { AlbumListItem } from "../data/types";
import photoTemporal from "../assets/fide.jpg";
import randomPic from "../data/apiFoto";

interface AlbumParams {
  album: AlbumListItem;
}
//const { albumQuery, albumsQuery, photosQuery } = useApi();

function AlbumThumb({ album }: AlbumParams) {
  const { randomQuery } = randomPic();
  console.log(randomQuery());
  //const placeHolder = randomQuery().data;
  return (
    <div className="singleAlbum stacked">
      <Link className="link" to={`/albums/${album.id}`}>
        <div className="front">
          <div className="wrapper">
            <img src={photoTemporal} alt="fidel" />
          </div>
          <div className="card-content">
            <h2 className="name-card">{album.name}</h2>
            <h3 className="date-card">{album.date}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AlbumThumb;
