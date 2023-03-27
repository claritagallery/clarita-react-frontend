import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import PhotoThumb from "./PhotoThumb";
import Drawer from "./Drawer";
import LeftArrow from "../assets/LeftArrow";
import RigthArrow from "../assets/Rightarrow";
import { PhotoData } from "../data/types";
import { PreviousOrNext } from "../data/types";
import { useState } from "react";

interface PhotoParams {
  photo?: PhotoData;
  albumId?: string;
}

function Photo({ photo, albumId }: PhotoParams) {
  const [toggleDrawer, toggleDrawerHandler] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);
  const navigate = useNavigate();

  function handleTouchStart(e: any) {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  function handleTouchMove(e: any) {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    if (!photo) {
      console.warn("photo not defined");
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5 && photo.next) {
      navigate(`/photos/${photo.next.id}`);
    }
    if (diff < -5 && photo.prev) {
      navigate(`/photos/${photo.prev.id}`);
    }
    setTouchPosition(null);
  }

  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  function onToggleClickHandler() {
    toggleDrawerHandler((prev) => !prev);
  }
  if (photo && albumId) {
    console.log("estan los dos parametros");
    const { id, filename, name, date_and_time, image_url, breadcrumbs, prev, next } =
      photo;

    const realPhotoLink = `http://192.168.1.133:8000/api/v1/photo/${id}/file`;

    return (
      <div
        className="full-photo-container"
        onClick={onToggleClickHandler}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {prev && (
          <div onClick={(e) => stopPropagation(e)}>
            <Link to={`/albums/${albumId}/photos/${prev.id}`}>
              <LeftArrow />
            </Link>
          </div>
        )}
        <img className="full-photo" src={realPhotoLink} />
        {next && (
          <div onClick={(e) => stopPropagation(e)}>
            <Link to={`/albums/${albumId}/photos/${next.id}`}>
              <RigthArrow />
            </Link>
          </div>
        )}
        <Drawer photo={photo} toggleDrawer={toggleDrawer} />
      </div>
    );
  }

  if (photo) {
    const { id } = photo;
    console.log("solo llego la foto");
    const realPhotoLink = `http://192.168.1.133:8000/api/v1/photo/${id}/file`;
    return (
      <div
        className="full-photo-container"
        onClick={onToggleClickHandler}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <img className="full-photo" src={realPhotoLink} />
        <Drawer photo={photo} toggleDrawer={toggleDrawer} />
      </div>
    );
  }
  return <h1>No photos in this album</h1>;
}

{
  /* /////////////////////////////////HARINA DE OTRO COSTAL//////////////////
  //////////////////////////////////////////////////////////////////////
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
} */
}

export default Photo;
