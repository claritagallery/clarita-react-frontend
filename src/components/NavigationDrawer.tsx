import React from "react";
import PhotoThumb from "./PhotoThumb";
import { PhotoData, AlbumListItem } from "../data/types";

type DrawerProps = {
  photo: PhotoData;
  toggleDrawer: boolean;
};
type BreadcrumbsProps = {
  breadcrumbs: AlbumListItem[];
};

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  console.log(breadcrumbs);
  if (!breadcrumbs.length) return null;

  return (
    <div className="bread-crumbs-container">
      {breadcrumbs.map((crumb) => {
        return (
          <>
            <span className="bread-crumb-item">po</span>
          </>
        );
      })}
    </div>
  );
}

function NavigationDrawer({ photo, toggleDrawer }: DrawerProps) {
  if (toggleDrawer) {
    return (
      <div className="navigation-drawer-container">
        <PhotoThumb previous={photo.prev} next={photo.next} />
        <Breadcrumbs breadcrumbs={photo.breadcrumbs} />
      </div>
    );
  } else {
    return null;
  }
}

export default NavigationDrawer;
