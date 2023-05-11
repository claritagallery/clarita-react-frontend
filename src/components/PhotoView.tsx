import React, { useState } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
import PhotoZoom from "./PhotoZoom"
interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isBigScreen: boolean
  setIsBigScreen: React.Dispatch<React.SetStateAction<boolean>>
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  deferredQuery: string
  photoLink: string
  // zoomItUp: () => void
  // exitZoom: () => void
  // isBeenClicked: boolean
}

function PhotoView({
  photo,
  albumId,
  isLoading,
  isBigScreen,
  setIsBigScreen,
  setDeferredPhoto,
  deferredQuery,
  photoLink,
}: // zoomItUp,
// exitZoom,
// isBeenClicked,
PhotoViewProps) {
  const [isBeenClicked, setIsBeenClicked] = useState(false)

  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  let id, prev, next
  if (photo) {
    id = photo.id
    prev = photo.prev
    next = photo.next
  }

  function exitZoom() {
    setIsBeenClicked(false)
  }

  function zoomItUp() {
    console.log("porque tardo?")
    setIsBeenClicked(true)
  }

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
        <PhotoZoom
          image={photoLink}
          isLoading={isLoading}
          exit={exitZoom}
          setIsBigScreen={setIsBigScreen}
        />
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
