import React from "react"
import { useContext, useState, useEffect } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { DrawerContext } from "../contexts/Drawer"

interface DrawerProps extends BaseProps {
  photo?: PhotoData
  isBigScreen: boolean
}

function Drawer({ photo, isLoading, isBigScreen }: DrawerProps) {
  const desktopWidthThreshold = 900
  const { isOpen } = useContext(DrawerContext)

  if (isLoading) {
    console.log("drawer loading")
  } else if (photo) {
    return (
      <div
        className={`drawer-container ${
          isOpen || isBigScreen ? "drawer-is-open-container" : ""
        }`}
      >
        <div className={`title-container ${isOpen ? "drawer-is-open-title" : ""}`}>
          <h4>{photo.title}</h4>
          <button className="toggle-drawer">
            <div className="toggle-line"></div>
          </button>
        </div>

        {(isOpen || isBigScreen) && <DetailsDrawer photo={photo} />}
      </div>
    )
  }
  return <h1 style={{ display: "none" }}>No drawer to show</h1>
}

type DetailsDrawerProps = {
  photo: PhotoData
}

function DetailsDrawer({ photo }: DetailsDrawerProps) {
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
}

export default Drawer
