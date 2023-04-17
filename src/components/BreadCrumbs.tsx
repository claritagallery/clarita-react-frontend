import React from "react"
import { AlbumListItem } from "../data/types"
import { Link } from "react-router-dom"
import homeIcon from "../assets/icon-color.png"

type BreadcrumbsProps = {
  breadcrumbs: AlbumListItem[]
  bg?: boolean
}

function BreadCrumbs({ breadcrumbs, bg }: BreadcrumbsProps) {
  if (!breadcrumbs.length) return null

  return (
    <div className={`main-crumb-wrapper ${bg && "with-bg"}`}>
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
                  <Link className="breadcrumb-link" to={`/albums/${crumb.id}`}>
                    {crumb.title}
                  </Link>
                </span>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
export default BreadCrumbs
