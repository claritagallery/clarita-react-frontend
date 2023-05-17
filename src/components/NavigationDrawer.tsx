import React from "react"
import PhotoThumb from "./PhotoThumb"
import { PhotoData, BaseProps } from "../data/types"
import BreadCrumbs from "./BreadCrumbs"

interface NavigationDrawerProps extends BaseProps {
  photo?: PhotoData
  toggleDrawer?: boolean
  albumId?: string
  setDeferredPhoto: React.Dispatch<React.SetStateAction<string>>
  deferredQuery: string
  photoLink: string
}

function NavigationDrawer({
  photo,
  toggleDrawer,
  albumId,
  isLoading,
  setDeferredPhoto,
  deferredQuery,
  photoLink,
}: NavigationDrawerProps) {
  if (isLoading) {
    return (
      <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
        <div className="thumb-wrapper"></div>
        <BreadCrumbs breadcrumbs={[]} bg={true} isLoading={isLoading} />
      </div>
    )
  } else if (photo) {
    return (
      <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
        <div className="thumb-wrapper">
          {photo.prev && (
            <PhotoThumb
              photo={photo.prev}
              albumId={albumId}
              setDeferredPhoto={setDeferredPhoto}
              photoLink={photoLink}
            />
          )}
          {photo.next && (
            <PhotoThumb
              photo={photo.next}
              albumId={albumId}
              setDeferredPhoto={setDeferredPhoto}
              photoLink={photoLink}
            />
          )}
        </div>
        <BreadCrumbs breadcrumbs={photo.breadcrumbs} bg={true} />
      </div>
    )
  }
  return <h1 style={{ display: "none" }}>No navigation drawer to show</h1>
}

export default NavigationDrawer
