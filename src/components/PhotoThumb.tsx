import React from "react";
import { PreviousOrNext } from "../data/types";
import { Link } from "react-router-dom";
import getRandomPic from "../data/apiFoto";

interface PhotoThumbParams {
  photo: PreviousOrNext;
  albumId?: string;
  index: number;
}

const PhotoThumb = ({ photo, albumId, index }: PhotoThumbParams) => {
  console.log(photo.date_and_time);
  const placeHolderPic = getRandomPic();
  console.log(photo);
  console.log(index);
  const link = albumId ? `/albums/${albumId}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <div
      className={`gallery-item ${
        index === 0
          ? "first-item"
          : index === 1
          ? "second-item"
          : index === 2
          ? "third-item"
          : index === 3
          ? "fourth-item"
          : index === 4
          ? "fifth-item"
          : index === 5
          ? "sixth-item"
          : ""
      }`}
    >
      <img className="picture-gallery" src={placeHolderPic} />
      <div className="gallery-info">
        <Link to={link}>
          <h3>{photo.name}</h3>
          <h4>{photo.date_and_time}</h4>
        </Link>
      </div>
    </div>
  );
};

export default PhotoThumb;
