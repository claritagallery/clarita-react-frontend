import React from "react"
import BreadCrumbs from "./BreadCrumbs"

import { APIError, AlbumDetailItem } from "../data/types"
export interface AlbumDetailParams {
  data?: AlbumDetailItem
  error: APIError
  isError: boolean
  isLoading: boolean
}

const AlbumDetail = ({ data, error, isError, isLoading }: AlbumDetailParams) => {
  if (isLoading) {
    return <h2>Its loading</h2>
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }
  if (data) {
    return (
      <>
        <div className="breadcrumbs-album">
          <BreadCrumbs breadcrumbs={data.breadcrumbs} />
          <h2 className="title-detail-album">{data.title}</h2>
          <p className="album-description">{data.description}</p>
        </div>
      </>
    )
  } else {
    console.warn("empty render on AlbumDetail")
    return null
  }
}

export default AlbumDetail
