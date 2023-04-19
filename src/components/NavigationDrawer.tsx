import React from "react"
import PhotoThumb from "./PhotoThumb"
import { PhotoData } from "../data/types"
import BreadCrumbs from "./BreadCrumbs"

type DrawerProps = {
  photo: PhotoData
  toggleDrawer: boolean
  albumId?: string
}

function NavigationDrawer({ photo, toggleDrawer, albumId }: DrawerProps) {
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

export default NavigationDrawer
