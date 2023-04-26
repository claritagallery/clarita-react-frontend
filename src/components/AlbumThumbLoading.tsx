import React from "react"
import { ImageIcon } from "./Icons"
function AlbumThumbLoading() {
  const LoadingAlbums = Array(4).fill(
    <div className="singleAlbum stacked">
      <div className="front">
        <div className="wrapper">
          <ImageIcon className="icon is-loading-img" />
        </div>
        <div className="card-content">
          <div className="animation-name"></div>
          <div className="animation-date"></div>
        </div>
      </div>
    </div>,
    0,
  )

  return <div className="main-container">{LoadingAlbums.map((album) => album)} </div>
}

export default AlbumThumbLoading
