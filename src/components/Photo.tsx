import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
//import PhotoThumb from "./PhotoThumb";
import Drawer from "./Drawer";
import React from "react";
import { PhotoData } from "../data/types";
import { useState } from "react";

interface PhotoParams {
  photo?: PhotoData;
  albumId?: string;
}

function Photo({ photo, albumId }: PhotoParams) {
  const [toggleDrawer, toggleDrawerHandler] = useState(false);
  function onToggleClickHandler() {
    toggleDrawerHandler((prev) => !prev);
  }

  if (photo) {
    const width = 6000;
    const height = 4000;
    const temporary_pic_url_horizontal = `https://source.unsplash.com/random/${width}x${height}`;
    const temporary_pic_url_vertical = `https://source.unsplash.com/random/${height}x${width}`;
    const { id, filename, name, date_and_time, image_url, breadcrumbs, prev, next } =
      photo;

    return (
      <div className="full-photo-container" onClick={onToggleClickHandler}>
        <img
          className="full-photo"
          src={temporary_pic_url_horizontal}
          srcSet={temporary_pic_url_horizontal}
        />
        <Drawer photo={photo} toggleDrawer={toggleDrawer} />
      </div>
    );
  }

  // if (photo) {
  //   return (
  //     <>
  //       <div>
  //         <span>{photo.breadcrumbs}</span> <span>{photo.name}</span>
  //         {photo.prev && <PhotoThumb photo={photo.prev} albumId={albumId} />}
  //         {photo.next && <PhotoThumb photo={photo.next} albumId={albumId} />}
  //       </div>
  //       <Image
  //         src={`${process.env.REACT_APP_API_BASE_URL}/api/v1/photo/${photo.id}/file`}
  //         alt={photo.filename}
  //         fluid
  //       />
  //     </>
  //   );
  // }
  return <h1>No photos in this album</h1>;
}

export default Photo;
