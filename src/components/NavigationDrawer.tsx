import React from "react"
import PhotoThumb from "./PhotoThumb"
import { PhotoData, BaseProps } from "../data/types"
import BreadCrumbs from "./BreadCrumbs"

interface NavigationDrawerProps extends BaseProps {
  photo?: PhotoData
  toggleDrawer?: boolean
  albumId?: string
}

function NavigationDrawer({
  photo,
  toggleDrawer,
  albumId,
  isLoading,
}: NavigationDrawerProps) {
  if (isLoading) {
    return <h1>Navigation Drawer loading</h1>
  } else if (photo) {
    return (
      <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
        <div className="thumb-wrapper">
          {photo.prev && <PhotoThumb photo={photo.prev} albumId={albumId} />}
          {photo.next && <PhotoThumb photo={photo.next} albumId={albumId} />}
        </div>
        <BreadCrumbs breadcrumbs={photo.breadcrumbs} bg={true} />
      </div>
    )
  }
  return <h1>No navigation drawer to show</h1>
}

export default NavigationDrawer
