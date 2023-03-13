import React from "react";
import { PreviousOrNext } from "../data/types";

import { Link } from "react-router-dom";

interface PhotoThumbParams {
  photo: PreviousOrNext;
  albumId?: string;
}

const PhotoThumb = ({ photo, albumId }: PhotoThumbParams) => {
  const link = albumId ? `/albums/${albumId}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <div>
      <Link to={link}>
        <div>
          <div>
            <div>{photo.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PhotoThumb;
