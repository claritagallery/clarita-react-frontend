import React from "react"
import { useContext } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { DrawerContext } from "../contexts/Drawer"

interface DrawerProps extends BaseProps {
  photo?: PhotoData
  isDesktop: boolean
}

function Drawer({ photo, isLoading, isDesktop }: DrawerProps) {
  const { isOpen } = useContext(DrawerContext)

  return (
    <div
      className={`drawer-container ${
        isOpen || isDesktop ? "drawer-is-open-container" : ""
      }`}
    >
      <div className={`title-container ${isOpen ? "drawer-is-open-title" : ""}`}>
        <h4>{isLoading || !photo ? "Photo details..." : photo.title}</h4>
        <button className="toggle-drawer toggle-line">
          <div className="toggle-line"></div>
        </button>
      </div>

      {(isOpen || !isDesktop) && photo ? (
        <DetailsDrawer photo={photo} />
      ) : (
        <DetailsDrawer />
      )}
    </div>
  )
}

type DetailsDrawerProps = {
  photo?: PhotoData
}

function DetailsDrawer({ photo }: DetailsDrawerProps) {
  if (photo) {
    return (
      <div className="info-open-drawer">
        {photo.description && (
          <div className="description">
            <p>{photo.description}</p>
          </div>
        )}

        <div className="container-brick-items">
          <div className="date-container brick-item">
            <h4 className="photo-drawer-date-title">Date</h4>
            <p>{photo.date_and_time || "date goes here"}</p>
          </div>
          <div className="tags brick-item">
            <h4>Tags</h4>
            <div className="list-tags">
              <span>one tag</span>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="info-open-drawer">
        <div className="description"></div>

        <div className="container-brick-items">
          <div className="date-container brick-item">
            <h4 className="photo-drawer-date-title">Date</h4>
          </div>
          <div className="tags brick-item">
            <h4>Tags</h4>
            <div className="list-tags"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Drawer
