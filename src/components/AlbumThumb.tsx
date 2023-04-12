import React from "react"
import { Link } from "react-router-dom"
import { AlbumListItem } from "../data/types"
import { ImageIcon } from "./Icons"

interface AlbumParams {
  album: AlbumListItem
}

function AlbumThumb({ album }: AlbumParams) {
  return (
    <div className="singleAlbum stacked">
      <Link className="link" to={`/albums/${album.id}`}>
        <div className="front">
          <div className="wrapper">
            <ImageIcon className="icon" />
          </div>
          <div className="card-content">
            <h2 className="name-card">{album.name}</h2>
            <h3 className="date-card">{album.date}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default AlbumThumb
