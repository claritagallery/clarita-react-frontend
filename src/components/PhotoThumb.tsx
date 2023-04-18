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

  return (
    <div className="thumb" onClick={(e) => stopPropagation(e)}>
      {photo && (
        <Link to={`/albums/${albumId}/photos/${photo.id}`}>
          <button className="button-thumb">{photo.title}</button>
        </Link>
      )}
    </div>
  )
}

export default PhotoThumb
