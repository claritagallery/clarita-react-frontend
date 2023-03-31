import React from "react"
import { Link } from "react-router-dom"
import { AlbumListItem } from "../types"

interface AlbumParams {
  album: AlbumListItem
}

function AlbumThumb({ album }: AlbumParams) {
  return (
    <div>
      <h1>{album.name}</h1>
      <Link to={`/albums/${album.id}`}>Take me to that album</Link>
      <h5>{album.date}</h5>
      <h3>claro que llego {album.name}</h3>
    </div>
  )
}

export default AlbumThumb
