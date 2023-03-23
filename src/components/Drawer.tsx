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
      <h5 className="photo-drawer-date">Photo date</h5>
      <p>This picture is soo super amazing and beautiful</p>
    </div>
  );

  return (
    <div className={`drawer-container ${toggleDrawer ? "drawer-is-open-container" : ""}`}>
      <div className={`title-container ${toggleDrawer ? "drawer-is-open-title" : ""}`}>
        <h4>{photo.name}</h4>
        <button className="toggle-drawer">
          <div
            className={`${!toggleDrawer ? "open-drawer-symbol" : "close-drawer-symbol"}`}
          ></div>
        </button>
      </div>
      {toggleDrawer && openDrawer}
    </div>
  );
}

export default Drawer;
