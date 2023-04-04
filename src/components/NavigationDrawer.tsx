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
            return (
              <div key={crumb.id} className="breadcrumb-wrap">
                <span className="sep">
                  <i className="fa fa-caret-right"></i>
                </span>{" "}
                <span className="breadcrumb">
                  <Link className="bread-crumb-link" to={`/albums/${crumb.id}`}>
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
  return (
    <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
      <PhotoThumb previous={photo.prev} next={photo.next} />
      <Breadcrumbs breadcrumbs={photo.breadcrumbs} />
    </div>
  );
}

export default NavigationDrawer;
