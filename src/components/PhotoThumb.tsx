import React from "react";
import { PreviousOrNext } from "../data/types";
import { Link } from "react-router-dom";
import getRandomPic from "../data/apiFoto";

interface PhotoThumbParams {
  photo: PreviousOrNext;
  albumId?: string;
}

const PhotoThumb = ({ photo, albumId }: PhotoThumbParams) => {
  const placeHolderPic = getRandomPic();
  console.log(placeHolderPic);
  const link = albumId ? `/albums/${albumId}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <div>
      <Link to={link}>
        <div>
          {/* <div>
            <div>{photo.name}</div>
          </div> */}
          <img src={placeHolderPic} width={100} height={80} />
        </div>
      </Link>
    </div>
  );
};

export default PhotoThumb;
