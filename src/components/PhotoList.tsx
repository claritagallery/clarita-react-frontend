import React from "react";
import { PhotoListItem, APIError } from "../data/types";
//import PhotoThumb from "./PhotoThumb";
import getRandomPic from "../data/apiFoto";
import PhotoAlbum from "react-photo-album";
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
    const photosParameters = photos.map((photo) => {
      const { imgSrc, height, width } = getRandomPic();
      return { src: imgSrc, width: width, height: height, title: photo.name };
    });

    return (
      <div className="gallery-container">
        <h2 className="subtitle">Photos</h2>
        <PhotoAlbum
          layout="rows"
          photos={photosParameters}
          defaultContainerWidth={50}
          spacing={2}
          padding={2}
          rowConstraints={(containerWidth) => {
            console.log("Current containerWidth=", containerWidth);
            if (containerWidth < 300) {
              return {
                minPhotos: 1,
                maxPhotos: 1,
              };
            }
            if (containerWidth > 300 && containerWidth < 600) {
              return {
                minPhotos: 1,
                maxPhotos: 2,
              };
            }
            if (containerWidth > 600 && containerWidth < 1000) {
              return {
                minPhotos: 3,
                maxPhotos: 4,
              };
            }

            return {
              minPhotos: 8,
              maxPhotos: 10,
            };
          }}
        />
      </div>
    );
  } else {
    console.warn("empty render on PhotoList");
    return null;
  }
};

export default PhotoList;
