import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import PhotoThumb from "./PhotoThumb";
import React from "react";
import { PhotoData } from "../data/types";

interface PhotoParams {
  photo?: PhotoData;
  albumId?: string;
}

function Photo({ photo, albumId }: PhotoParams) {
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
