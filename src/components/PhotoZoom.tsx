import React, { useState, useDeferredValue } from "react"
import { BaseProps } from "../data/types"
type PhotoZoomParams = {
  photoLink: string
  isLoading: boolean | undefined
}

function PhotoZoom({ photoLink, isLoading }: PhotoZoomParams) {
  console.log(photoLink)
  console.log(isLoading)
  return <h1 style={{ color: "red" }}>I am zooming</h1>
}

export default PhotoZoom
