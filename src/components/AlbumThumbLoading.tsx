import React from "react"
import { ImageIcon } from "./Icons"
function AlbumThumbLoading() {
  return (
    <div className="main-container">
      <div className="singleAlbum stacked">
        <div className="front">
          <div className="wrapper">
            <ImageIcon className="icon" />
          </div>
          <div className="card-content">
            <h2 className="name-card">Album Name</h2>
            <h3 className="date-card">Album Date</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlbumThumbLoading
