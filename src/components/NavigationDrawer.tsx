import React from "react";
import PhotoThumb from "./PhotoThumb";
import { PhotoData, AlbumListItem } from "../data/types";
import { Link } from "react-router-dom";

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
    <div className="main-crumb-wrapper">
      <div className="crumb-nav-wrap">
        <nav className="nav">
          {breadcrumbs.map((crumb) => {
            console.log(crumb);
            return (
              <div key={crumb.id} className="breadcrumb-wrap">
                <span className="sep">
                  <i className="fa fa-caret-right">&#xf0da;</i>
                </span>{" "}
                <span className="breadcrumb">
                  <Link className="bread-crumb-link" to="/">
                    {crumb.name}
                  </Link>
                </span>
              </div>
            );
          })}
        </nav>
      </div>
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
