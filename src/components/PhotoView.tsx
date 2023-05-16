import React, { useCallback, useState, useEffect } from "react"
import { PhotoData, BaseProps } from "../data/types"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/LeftArrow"
import RightArrow from "../assets/RightArrow"
import PhotoZoom from "./PhotoZoom"

interface PhotoViewProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isBigScreen: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  photoLink: string
}

const useMountTransition = (isMounted: boolean, unmountDelay: number) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false)

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true)
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay)
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [unmountDelay, isMounted, hasTransitionedIn])

  return hasTransitionedIn
}

function PhotoView({
  photo,
  albumId,
  isLoading,
  isBigScreen,
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

  const showZoomedPicture = useCallback(() => {
    if (isBigScreen) {
      setIsZoomed(true)
    }
  }, [isBigScreen, setIsZoomed, setShowHeader])

  const exitZoomedPicture = useCallback(() => {
    setIsZoomed(false)
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

      {isZoomed || isTransitioning ? (
        <PhotoZoom
          photo={photoLink}
          isLoading={isLoading}
          exit={exitZoomedPicture}
          isTransitioningIn={isTransitioningIn}
          isTransitioningOut={isTransitioningOut}
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
