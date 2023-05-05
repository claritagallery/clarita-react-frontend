import React from "react"
import { ImageIcon } from "./Icons"

function AlbumThumbPlaceHolder() {
  return (
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
    </div>
  )
}

function AlbumThumbLoading({ num }: { num: number }) {
  return (
    <div className="main-container">
      {Array(num)
        .fill(<AlbumThumbPlaceHolder />, 0)
        .map((album) => album)}
    </div>
  )
}

export default AlbumThumbLoading
