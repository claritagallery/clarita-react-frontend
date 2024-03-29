import React, { useCallback, useState } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
import PhotoZoom from "./PhotoZoom"
import useMountTransition from "../hooks/useMountTransition"

interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isDesktop: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  photoLink: string
}

function PhotoView({
  photo,
  albumId,
  isLoading,
  isDesktop,
  setShowHeader,
  setDeferredPhoto,
  photoLink,
}: PhotoViewProps) {
  function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
  }

  const [isZoomed, setIsZoomed] = useState(false)
  const isTransitioning = useMountTransition(isZoomed, 400)
  const isTransitioningIn = isZoomed && isTransitioning
  const isTransitioningOut = !isZoomed && isTransitioning
  const prev = photo?.prev
  const next = photo?.next
  const photoName = photo?.filename
  const showZoomedPicture = useCallback(() => {
    if (isDesktop) {
      setIsZoomed(true)
    }
  }, [isDesktop, setIsZoomed, setShowHeader])

  const exitZoomedPicture = useCallback(() => {
    setIsZoomed(false)
  }, [isDesktop, setIsZoomed, setShowHeader])

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

      {isZoomed || isTransitioning ? (
        <PhotoZoom
          photo={photoLink}
          isLoading={isLoading}
          exit={exitZoomedPicture}
          isTransitioningIn={isTransitioningIn}
          isTransitioningOut={isTransitioningOut}
          alt={photoName}
        />
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
