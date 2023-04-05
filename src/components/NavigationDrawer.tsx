import React from "react";
import PhotoThumb from "./PhotoThumb";
import { PhotoData, AlbumListItem } from "../data/types";
import { Link } from "react-router-dom";
import homeIcon from "../assets/icon-color.png";

type DrawerProps = {
  photo: PhotoData;
  toggleDrawer: boolean;
  albumId: string;
};
type BreadcrumbsProps = {
  breadcrumbs: AlbumListItem[];
};

function Breadcrumbs({ breadcrumbs }: BreadcrumbsProps) {
  if (!breadcrumbs.length) return null;

  return (
    <div className="main-crumb-wrapper">
      <div className="crumb-nav-wrap">
        <nav className="nav">
          <div className="breadcrumb-wrap">
            <Link to="/">
              {" "}
              <img src={homeIcon} alt="home-icon" width={25} height={25} />
            </Link>
          </div>
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

function NavigationDrawer({ photo, toggleDrawer, albumId }: DrawerProps) {
  console.log(photo);
  return (
    <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
      <PhotoThumb previous={photo.prev} next={photo.next} albumId={albumId} />
      <Breadcrumbs breadcrumbs={photo.breadcrumbs} />
    </div>
  );
}

export default NavigationDrawer;
