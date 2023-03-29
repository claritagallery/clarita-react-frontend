import React from "react";
import { PhotoData } from "../data/types";
import NavigationDrawer from "./NavigationDrawer";

type DrawerProps = {
  photo: PhotoData;
  toggleDrawer: boolean;
};

function Drawer({ photo, toggleDrawer }: DrawerProps) {
  console.log(photo);
  // const openDrawer = (

  // );

  return (
    <div className={`drawer-container ${toggleDrawer ? "drawer-is-open-container" : ""}`}>
      <div className={`title-container ${toggleDrawer ? "drawer-is-open-title" : ""}`}>
        <h4>{photo.name}</h4>
        <button className="toggle-drawer">
          <div className="toggle-line"></div>
        </button>
      </div>

      {toggleDrawer && <DetailsDrawer photo={photo} />}
    </div>
  );
}

type DetailsDrawerProps = {
  photo: PhotoData;
};

function DetailsDrawer({ photo }: DetailsDrawerProps) {
  return (
    <div className="info-open-drawer">
      <div className="description">
        <p>This is the amazing description for this picture</p>
      </div>
      <div className="container-brick-items">
        <div className="date-container brick-item">
          <h4 className="photo-drawer-date-title">Date</h4>
          <p>{photo.date_and_time || "date goes here"}</p>
        </div>
        <div className="tags brick-item">
          <h4>Tags</h4>
          <div className="list-tags">
            <span>one tag</span>
            <span>two tag</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
