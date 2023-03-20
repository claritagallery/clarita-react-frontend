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
      return {
        src: imgSrc,
        width: width,
        height: height,
        title: photo.name,
        date: photo.date_and_time,
      };
    });

    return (
      <div className="gallery-container">
        <h2 className="subtitle">Photos</h2>
        <PhotoAlbum
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto, layout }) => (
            <div
              className="picture-cell"
              style={{
                position: "relative",
                ...wrapperStyle,
                border: "1px solid orange",
              }}
            >
              {renderDefaultPhoto({ wrapped: true })}

              {photo.title && (
                <div className="picture-info">
                  <h4> {photo.title}</h4>
                  <h5>{photo.date}</h5>
                </div>
              )}
            </div>
          )}
          layout="rows"
          photos={photosParameters}
          defaultContainerWidth={50}
          spacing={2}
          padding={2}
          rowConstraints={(containerWidth) => {
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
              maxPhotos: 9,
            };
          }}
          onClick={({ photo, event }) => {
            // console.log(photo);
            console.log(event);
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
