import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState, useContext, useDeferredValue } from "react"
import { DrawerContext } from "../contexts/Drawer"
import Drawer from "./Drawer"
import PhotoView from "./PhotoView"
import NavigationDrawer from "./NavigationDrawer"
import { PhotoData, BaseProps, APIError } from "../data/types"
import { UseQueryResult } from "react-query"
import ErrorBox from "./ErrorBox"

interface PhotoProps extends BaseProps {
  query: UseQueryResult<PhotoData, APIError>
  albumId?: string
  isDesktop: boolean
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>
}

function Photo({ query, albumId, isDesktop, setShowHeader }: PhotoProps) {
  const { data, error, isError, isLoading, refetch } = query
  const { isOpen, toggle } = useContext(DrawerContext)
  const [touchPosition, setTouchPosition] = useState(null)
  const [deferredPhoto, setDeferredPhoto] = useState("")
  const deferredQuery = useDeferredValue(deferredPhoto)
  const navigate = useNavigate()
  const baseUrl = process.env.REACT_APP_API_BASE_URL
  console.log(isError)
  useEffect(() => {
    setShowHeader(isDesktop)
  }, [isDesktop, setShowHeader])

  function handleTouchStart(e: any) {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  function handleToggle() {
    if (!isDesktop) {
      toggle()
    }
  }

  function handleTouchMove(e: any) {
    const touchDown = touchPosition
    if (touchDown === null) {
      return
    }
    if (!data) {
      console.warn("photo not defined")
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch
    if (diff > 5 && data.next) {
      navigate(`/albums/${albumId}/photos/${data.next.id}`)
    }
    if (diff < -5 && data.prev) {
      navigate(`/albums/${albumId}/photos/${data.prev.id}`)
    }
    setTouchPosition(null)
  }
  if (isError) {
    return (
      <ErrorBox
        title="An error ocurred while loading this photo"
        error={error}
        refetch={refetch}
      />
    )
  }
  const photoLink =
    isLoading || !data ? deferredQuery : `${baseUrl}/api/v1/photos/${data.id}/file`
  return (
    <div
      className="full-photo-container"
      onClick={handleToggle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <PhotoView
        photo={data}
        albumId={albumId}
        isLoading={isLoading}
        isDesktop={isDesktop}
        setShowHeader={setShowHeader}
        setDeferredPhoto={setDeferredPhoto}
        photoLink={photoLink}
      />
      <Drawer photo={data} isLoading={isLoading} isDesktop={isDesktop} />
      <NavigationDrawer
        photo={data}
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
