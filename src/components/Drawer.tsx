import React from "react";
import { PhotoData } from "../data/types";

type DrawerProps = {
  photo: PhotoData;
  toggleDrawer: boolean;
};

function Drawer({ photo, toggleDrawer }: DrawerProps) {
  console.log(photo);
  const openDrawer = (
    <div className="info-open-drawer">
      <div className="description brick-item">
        <h4>Description</h4>
        <p>This is the amazing description for this picture</p>
      </div>
      <div className="date-container brick-item">
        <h4 className="photo-drawer-date-title">Date</h4>
        <p>{`${photo.date_and_time} && date goes here`}</p>
      </div>
      <div className="tags brick-item">
        <h4>Tags</h4>
        <ul className="list-tags">
          <li>one tag</li>
          <li>two tag</li>
          <li>three tag</li>
          <li>four tag</li>
          <li>five tag</li>
        </ul>
      </div>
      <div className="exif brick-item">
        <h4>EXIF</h4>
        This is the EXIF for this photo
      </div>
    </div>
  );

  return (
    <div className={`drawer-container ${toggleDrawer ? "drawer-is-open-container" : ""}`}>
      <div className={`title-container ${toggleDrawer ? "drawer-is-open-title" : ""}`}>
        <h4>{photo.name}</h4>
        <button className="toggle-drawer">
          <div className="toggle-line"></div>
        </button>
      </div>
      {toggleDrawer && openDrawer}
    </div>
  );
}

export default Drawer;
