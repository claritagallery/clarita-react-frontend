import React from "react"
import PhotoThumb from "./PhotoThumb"
import { PhotoData } from "../data/types"
import BreadCrumbs from "./BreadCrumbs"

type DrawerProps = {
  photo: PhotoData
  toggleDrawer: boolean
  albumId: string
}

function NavigationDrawer({ photo, toggleDrawer, albumId }: DrawerProps) {
  return (
    <div className={`navigation-drawer-container ${toggleDrawer ? "is-open" : ""}  `}>
      <PhotoThumb previous={photo.prev} next={photo.next} albumId={albumId} />
      <BreadCrumbs breadcrumbs={photo.breadcrumbs} bg={true} />
    </div>
  )
}

export default NavigationDrawer
