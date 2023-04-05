import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import NavigationDrawer from "./NavigationDrawer";
import LeftArrow from "../assets/LeftArrow";
import RigthArrow from "../assets/Rightarrow";
import { PhotoData } from "../data/types";
import { useState, useContext } from "react";
import { DrawerContext } from "../context/drawersContext";

interface PhotoParams {
  photo?: PhotoData;
  albumId?: string;
}

function Photo({ photo, albumId }: PhotoParams) {
  console.log(photo);
  const { isOpen, toggle } = useContext(DrawerContext);
  const [touchPosition, setTouchPosition] = useState(null);
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

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
      navigate(`/albums/${albumId}/photos/${photo.next.id}`);
    }
    if (diff < -5 && photo.prev) {
      navigate(`/albums/${albumId}/photos/${photo.prev.id}`);
    }
    setTouchPosition(null);
  }

  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
  }

  if (photo && albumId) {
    const { id, filename, name, date_and_time, image_url, breadcrumbs, prev, next } =
      photo;

    const realPhotoLink = `${baseUrl}/api/v1/photo/${id}/file`;

    return (
      <div
        className="full-photo-container"
        onClick={toggle}
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

        <Drawer photo={photo} toggleDrawer={isOpen} />
        <NavigationDrawer photo={photo} toggleDrawer={isOpen} albumId={albumId} />
      </div>
    );
  }

  if (photo && !albumId) {
    const { id } = photo;
    const realPhotoLink = `${baseUrl}/api/v1/photo/${id}/file`;
    return (
      <div
        className="full-photo-container"
        onClick={toggle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <img className="full-photo" src={realPhotoLink} />
        <Drawer photo={photo} toggleDrawer={isOpen} />
      </div>
    );
  }
  return <h1>No photos in this album</h1>;
}

export default Photo;
