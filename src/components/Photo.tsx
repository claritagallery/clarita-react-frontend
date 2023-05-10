import React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { DrawerContext } from "../contexts/Drawer"
import Drawer from "./Drawer"
import PhotoView from "./PhotoView"
import NavigationDrawer from "./NavigationDrawer"
import { PhotoData, BaseProps } from "../data/types"

interface PhotoProps extends BaseProps {
  photo?: PhotoData
  albumId?: string
  isBigScreen: boolean
  toggleHeader: React.Dispatch<React.SetStateAction<boolean>>
}

function Photo({ photo, albumId, isLoading, isBigScreen, toggleHeader }: PhotoProps) {
  const { isOpen, toggle } = useContext(DrawerContext)
  const [touchPosition, setTouchPosition] = useState(null)
  const navigate = useNavigate()

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
        isBigScreen={isBigScreen}
        toggleHeader={toggleHeader}
      />
      <Drawer photo={photo} isLoading={isLoading} />
      <NavigationDrawer
        photo={photo}
        toggleDrawer={isOpen}
        albumId={albumId}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Photo
