import React, { useState } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
import PhotoZoom from "./PhotoZoom"
import { createNoSubstitutionTemplateLiteral } from "typescript"

interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isBigScreen: boolean
  setIsBigScreen: React.Dispatch<React.SetStateAction<boolean>>
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  deferredQuery: string
  photoLink: string
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
}: PhotoViewProps) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  let id, prev, next
  if (photo) {
    prev = photo.prev
    next = photo.next
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

      {isBigScreen ? (
        <PhotoZoom photo={photoLink} isLoading={isLoading} />
      ) : (
        <img
          className={`full-photo ${isLoading && "blurred-picture"} 
          }`}
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
