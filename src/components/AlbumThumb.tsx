import React from "react"
import { Link } from "react-router-dom"
import { AlbumListItem } from "../data/types"
import { ImageIcon } from "./Icons"

interface AlbumParams {
  album: AlbumListItem
}

function AlbumThumb({ album }: AlbumParams) {
  console.log(album)
  return (
    <div className="singleAlbum stacked">
      <ImageIcon className="icon" />
      <div className="content">
        <h1>{album.name}</h1>
        <Link className="link" to={`/albums/${album.id}`}>
          Take me to that album
        </Link>
        <h5>{album.date}</h5>
      </div>
    </div>
  )
}

export default AlbumThumb
