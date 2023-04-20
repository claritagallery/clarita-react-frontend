import React from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
}

function PhotoView({ photo, albumId, isLoading }: PhotoViewProps) {
  const baseUrl = process.env.REACT_APP_API_BASE_URL

  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  let id, prev, next
  if (photo) {
    id = photo.id
    prev = photo.prev
    next = photo.next
  }

  const photoLink = `${baseUrl}/api/v1/photos/${id}/file`
  return (
    <>
      {prev && (
        <div onClick={(e) => stopPropagation(e)}>
          <Link to={`/albums/${albumId}/photos/${prev.id}`}>
            <LeftArrow />
          </Link>
        </div>
      )}
      <img className="full-photo" src={photoLink} />
      {next && (
        <div onClick={(e) => stopPropagation(e)}>
          <Link to={`/albums/${albumId}/photos/${next.id}`}>
            <RightArrow />
          </Link>
        </div>
      )}
    </>
  )
}

export default PhotoView
