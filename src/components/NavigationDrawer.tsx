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
    // <div className="bread-crumbs-container">
    //   <nav className="bread-crumbs-nav">
    //     {breadcrumbs.map((crumb) => {
    //       return (
    //         <div key={crumb.id} className="bread-crumb-wrap">
    //           <span className="sep">
    //             <i className="fa fa-caret-right"></i>
    //           </span>
    //           <span className="bread-crumb-item">
    //             <Link className="breadcrumb-link" to="/">
    //               {crumb.name}
    //             </Link>
    //           </span>
    //         </div>
    //       );
    //     })}
    //   </nav>
    // </div>

    <div className="main-crumb-wrapper">
      <div className="crumb-nav-wrap">
        <nav className="nav">
          <div className="breadcrumb-wrap">
            <span className="sep">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            <span className="breadcrumb">
              <a href="#">Universe</a>
            </span>
          </div>
          <div className="breadcrumb-wrap">
            <span className="sep">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            <span className="breadcrumb">
              <a href="#">Milky Way</a>
            </span>
          </div>
          <div className="breadcrumb-wrap">
            <span className="sep">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            <span className="breadcrumb">
              <a href="#">Solar System</a>
            </span>
          </div>
          <div className="breadcrumb-wrap">
            <span className="sep">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            <span className="breadcrumb">
              <a href="#">Earth</a>
            </span>
          </div>
          <div className="breadcrumb-wrap">
            <span className="sep">
              <i className="fa fa-caret-right"></i>
            </span>{" "}
            <span className="breadcrumb">
              <a href="#">Internet</a>
            </span>
          </div>
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
