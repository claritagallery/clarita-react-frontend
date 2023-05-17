import React from "react"
import { useContext, useState, useEffect } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { DrawerContext } from "../contexts/Drawer"

interface DrawerProps extends BaseProps {
  photo?: PhotoData
  isBigScreen: boolean
}

function Drawer({ photo, isLoading, isBigScreen }: DrawerProps) {
  const { isOpen } = useContext(DrawerContext)

  return (
    <div
      className={`drawer-container ${
        isOpen || isBigScreen ? "drawer-is-open-container" : ""
      }`}
    >
      <div className={`title-container ${isOpen ? "drawer-is-open-title" : ""}`}>
        <h4>{isLoading || !photo ? "Title" : photo.title}</h4>
        <button className="toggle-drawer toggle-line">
          <div className="toggle-line"></div>
        </button>
      </div>

      {(isOpen || isBigScreen) && photo ? (
        <DetailsDrawer photo={photo} />
      ) : (
        <div className="info-open-drawer">
          <h4 style={{ color: "#55303e", fontSize: "0.9rem" }}>Photo details ...</h4>
        </div>
      )}
    </div>
  )
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
