import React from "react";
import { PhotoData } from "../data/types";
import { useState } from "react";

type DrawerProps = {
  photo: PhotoData;
};

function Drawer({ photo }: DrawerProps) {
  console.log(photo);
  const [toggleDrawer, toggleDrawerHandler] = useState(false);

  function drawerTogglerClickHandler() {
    toggleDrawerHandler((prev) => !prev);
  }
  const openDrawer = (
    <div className="info-open-drawer" onClick={() => toggleDrawerHandler(false)}>
      <h5>Photo date</h5>
      <p>This picture is soo super amazing and beautiful</p>
    </div>
  );

  return (
    <div className="drawer-container">
      <div className="title-container">
        <h4>{photo.name}</h4>
        <button onClick={drawerTogglerClickHandler} className="toggle-drawer">
          <div className="open-drawer-symbol"></div>
        </button>
      </div>
      {toggleDrawer && openDrawer}
    </div>
  );
}

export default Drawer;
