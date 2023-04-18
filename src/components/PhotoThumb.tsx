import React from "react"
import { PreviousOrNext } from "../data/types"
import { Link } from "react-router-dom"

interface PhotoThumbParams {
  photo: PreviousOrNext
  albumId?: string
}
function PhotoThumb({ photo, albumId }: PhotoThumbParams) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }
  const id = photo ? photo.id : ""
  const title = photo ? photo.title : ""

  const url = albumId ? `/albums/${albumId}/photos/${id}` : `/photos/${id} `

  return (
    <div className="thumb" onClick={(e) => stopPropagation(e)}>
      <Link to={url}>
        <button className="button-thumb">{title}</button>
      </Link>
    </div>
  )
}

export default PhotoThumb
