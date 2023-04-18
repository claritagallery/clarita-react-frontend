import React from "react"
import { PreviousOrNext } from "../data/types"
import { Link } from "react-router-dom"

interface PhotoThumbParams {
  photo: PreviousOrNext
  albumId?: string
}
function PhotoThumb({ photo, albumId }: PhotoThumbParams) {
  if (!photo) {
    return null
  }
  const { id, title } = photo
  const url = albumId ? `/albums/${albumId}/photos/${id}` : `/photos/${id} `

  return (
    <div className="thumb" onClick={(e) => e.stopPropagation()}>
      <Link to={url}>
        <button className="button-thumb">{title}</button>
      </Link>
    </div>
  )
}

export default PhotoThumb
