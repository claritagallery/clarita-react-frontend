import React, { useCallback, useState } from "react"
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
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  deferredQuery: string
  photoLink: string
}

function PhotoView({
  photo,
  albumId,
  isLoading,
  isBigScreen,
  setShowHeader,
  setDeferredPhoto,
  deferredQuery,
  photoLink,
}: PhotoViewProps) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }
  const [isZoomed, setIsZoomed] = useState(false)
  const prev = photo?.prev
  const next = photo?.next

  const showZoomedPicture = useCallback(() => {
    if (isBigScreen) {
      setIsZoomed(true)
      setShowHeader(false)
    }
  }, [isBigScreen, setIsZoomed, setShowHeader])

  const exitZoomedPicture = useCallback(() => {
    setIsZoomed(false)
    setShowHeader(true)
  }, [isBigScreen, setIsZoomed, setShowHeader])

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

      {isBigScreen && isZoomed ? (
        <PhotoZoom photo={photoLink} isLoading={isLoading} exit={exitZoomedPicture} />
      ) : (
        <img
          onClick={showZoomedPicture}
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
