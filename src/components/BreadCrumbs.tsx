import React from "react"
import { Link } from "react-router-dom"
import homeIcon from "../assets/icon-color.png"
import { BaseProps, BreadcrumbItem } from "../data/types"

interface BreadcrumbsProps extends BaseProps {
  breadcrumbs: BreadcrumbItem[]
  bg?: boolean
}

function BreadCrumbs({ breadcrumbs, bg, isLoading }: BreadcrumbsProps) {
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

          {isLoading ? (
            <div className="breadcrumb-wrap">
              <span className="sep">
                <i className="fa fa-caret-right"></i>
              </span>{" "}
              <span className="breadcrumb">. . . .</span>
            </div>
          ) : (
            breadcrumbs.map((crumb) => {
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
            })
          )}
        </nav>
      </div>
    </div>
  )
}
export default BreadCrumbs
