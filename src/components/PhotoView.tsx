import React, { useState, useDeferredValue, useEffect } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
import PhotoZoom from "./PhotoZoom"
interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isBigScreen: boolean
}

function PhotoView({ photo, albumId, isLoading, isBigScreen }: PhotoViewProps) {
  const [isBeenClicked, setIsBeenClicked] = useState(false)
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  const [deferredPhoto, setDeferredPhoto] = useState("")
  const deferredQuery = useDeferredValue(deferredPhoto)
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  let id, prev, next
  if (photo) {
    id = photo.id
    prev = photo.prev
    next = photo.next
  }

  useEffect(() => setIsBeenClicked(false), [id])

  function zoomItUp() {
    setIsBeenClicked(true)
  }

  const photoLink = isLoading ? deferredQuery : `${baseUrl}/api/v1/photos/${id}/file`
  return (
    <>
      {prev && (
        <div
          onClick={(e) => {
            stopPropagation(e)
            setDeferredPhoto(photoLink)
          }}
        >
          <Link to={`/albums/${albumId}/photos/${prev.id}`}>
            <LeftArrow />
          </Link>
        </div>
      )}

      {isBigScreen && isBeenClicked ? (
        <PhotoZoom image={photoLink} isLoading={isLoading} />
      ) : (
        <img
          onClick={zoomItUp}
          className={`full-photo ${isLoading && "blurred-picture"}`}
          src={photoLink}
        />
      )}
      {next && (
        <div
          onClick={(e) => {
            stopPropagation(e)
            setDeferredPhoto(photoLink)
          }}
        >
          <Link to={`/albums/${albumId}/photos/${next.id}`}>
            <RightArrow />
          </Link>
        </div>
      )}
    </>
  )
}

export default PhotoView
