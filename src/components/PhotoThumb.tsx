import React from "react";
import { PreviousOrNext } from "../data/types";
import { Link } from "react-router-dom";
interface NavigationDrawerParams {
  previous: PreviousOrNext;
  next: PreviousOrNext;
  albumId?: string;
}

function PhotoThumb({ previous, next, albumId }: NavigationDrawerParams) {
  console.log(albumId);

  const previousId = previous ? previous.id : null;
  const nextId = next ? next.id : null;
  return (
    <div className="photo-thumb-container">
      <div className="thumb not-prev-or-next">
        {previousId && (
          <Link to={`/albums/${albumId}/photos/${previousId}`}>
            {" "}
            <button className="button-thumb">{previous ? previous.name : null}</button>
          </Link>
        )}
      </div>
      <div className="thumb not-prev-or-next">
        {nextId && (
          <Link to={`/albums/${albumId}/photos/${nextId}`}>
            {" "}
            <button className="button-thumb">{next ? next.name : null}</button>
          </Link>
        )}
      </div>
    </div>
  );
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
