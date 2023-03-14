import React from "react";

import { PhotoListItem, APIError } from "../data/types";

import PhotoThumb from "./PhotoThumb";

export interface PhotoListParams {
  albumId?: string;
  data?: {
    next: boolean | null | string;
    total: number;
    results: PhotoListItem[];
  };
  error: APIError;
  isError: boolean;
  isLoading: boolean;
}

const PhotoList = ({ albumId, data, error, isError, isLoading }: PhotoListParams) => {
  data;
  if (isLoading) {
    return <h1>its charging boy</h1>;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }

  if (data) {
    const photos = data.results;
    photos;
    return (
      <div>
        <h2>Aqui van fotos</h2>
        <div className="pictures-wrapper">
          <div className="gallery">
            {photos.map((photo, ind) => {
              return (
                <PhotoThumb key={photo.id} photo={photo} albumId={albumId} index={ind} />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    console.warn("empty render on PhotoList");
    return null;
  }
};

export default PhotoList;
