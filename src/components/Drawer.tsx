import React from "react"
import { useContext, useState, useEffect } from "react"
import { PhotoData } from "../data/types"
import { DrawerContext } from "../contexts/Drawer"

type DrawerProps = {
  photo: PhotoData
}

function Drawer({ photo }: DrawerProps) {
  const desktopWidthThreshold = 900
  const { isOpen } = useContext(DrawerContext)
  const [windWidth, setWindWidth] = useState(window.innerWidth)
  console.log(windWidth)
  function isNavShowing() {
    setWindWidth(window.innerWidth)
    console.log(windWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", isNavShowing)

    return () => {
      window.removeEventListener("resize", isNavShowing)
    }
  }, [windWidth])

  return (
    <div
      className={`drawer-container ${
        isOpen || windWidth > desktopWidthThreshold ? "drawer-is-open-container" : ""
      }`}
    >
      <div className={`title-container ${isOpen ? "drawer-is-open-title" : ""}`}>
        <h4>{photo.name}</h4>
        <button className="toggle-drawer">
          <div className="toggle-line"></div>
        </button>
      </div>

      {(isOpen || windWidth > desktopWidthThreshold) && <DetailsDrawer photo={photo} />}
    </div>
  )
}

type DetailsDrawerProps = {
  photo: PhotoData
}

function DetailsDrawer({ photo }: DetailsDrawerProps) {
  return (
    <div className="info-open-drawer">
      <div className="description">
        <p>This is the amazing description for this picture</p>
      </div>
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
