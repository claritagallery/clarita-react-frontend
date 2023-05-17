import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState, useContext, useDeferredValue } from "react"
import { DrawerContext } from "../contexts/Drawer"
import Drawer from "./Drawer"
import PhotoView from "./PhotoView"
import NavigationDrawer from "./NavigationDrawer"
import { PhotoData, BaseProps } from "../data/types"

interface PhotoProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isDesktop: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}

function Photo({ photo, albumId, isLoading, isDesktop, setShowHeader }: PhotoProps) {
  const { isOpen, toggle } = useContext(DrawerContext)
  const [touchPosition, setTouchPosition] = useState(null)
  const [deferredPhoto, setDeferredPhoto] = useState("")
  const deferredQuery = useDeferredValue(deferredPhoto)
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_API_BASE_URL

  useEffect(() => {
    setShowHeader(isDesktop)
  }, [isDesktop, setShowHeader])

  function handleTouchStart(e: any) {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  function handleTouchMove(e: any) {
    const touchDown = touchPosition
    if (touchDown === null) {
      return
    }
    if (!photo) {
      console.warn("photo not defined")
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
    if (diff > 5 && photo.next) {
      navigate(`/albums/${albumId}/photos/${photo.next.id}`)
    }
    if (diff < -5 && photo.prev) {
      navigate(`/albums/${albumId}/photos/${photo.prev.id}`)
    }
    setTouchPosition(null)
  }
  const photoLink =
    isLoading || !photo ? deferredQuery : `${baseUrl}/api/v1/photos/${photo.id}/file`
  return (
    <div
      className="full-photo-container"
      onClick={toggle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <PhotoView
        photo={photo}
        albumId={albumId}
        isLoading={isLoading}
        isDesktop={isDesktop}
        setShowHeader={setShowHeader}
        setDeferredPhoto={setDeferredPhoto}
        photoLink={photoLink}
      />
      <Drawer photo={photo} isLoading={isLoading} isDesktop={isDesktop} />
      <NavigationDrawer
        photo={photo}
        toggleDrawer={isOpen}
        albumId={albumId}
        isLoading={isLoading}
        setDeferredPhoto={setDeferredPhoto}
        deferredQuery={deferredQuery}
        photoLink={photoLink}
      />
    </div>
  )
}

export default Photo
