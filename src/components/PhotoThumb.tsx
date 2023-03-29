import React from "react";
import { PreviousOrNext } from "../data/types";

// interface PhotoThumbParams {
//   photo: PreviousOrNext;
//   albumId?: string;
// }

function PhotoThumb() {
  return <h6>Photo Thumb aqui</h6>;
}

export default PhotoThumb;
// -import React from "react";
// -import { PreviousOrNext } from "../data/types";
// -import { Link } from "react-router-dom";
// -import getRandomPic from "../data/apiFoto";
// -
// -interface PhotoThumbParams {
// -  photo: PreviousOrNext;
// -  albumId?: string;
// -  index: number;
// -}
// -
// -const PhotoThumb = ({ photo, albumId, index }: PhotoThumbParams) => {

// -  const placeHolderPic = getRandomPic();
// -  console.log(photo);
// -  console.log(index);
// -  const link = albumId ? `/albums/${albumId}/photos/${photo.id}` : `/photos/${photo.id}`;
// -  return (
// -    <div
// -
// -    >
// -      <img className="picture-gallery" src={placeHolderPic} />
// -      <div className="gallery-info">
// -        <Link to={link}>
// -          <h3>{photo.name}</h3>
// -          <h4>{photo.date_and_time}</h4>
// -        </Link>
// -      </div>
// -    </div>
// -  );
// -};
