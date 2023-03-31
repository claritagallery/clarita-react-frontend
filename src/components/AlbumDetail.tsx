import React from "react"
import { Container, Spinner } from "react-bootstrap"
import Breadcrumbs from "./Breadcrumbs"
import PhotoThumb from "./PhotoThumb"

import { APIError, AlbumDetailItem } from "../types"
export interface AlbumDetailParams {
  data?: AlbumDetailItem
  error: APIError
  isError: boolean
  isLoading: boolean
}

const AlbumDetail = ({ data, error, isError, isLoading }: AlbumDetailParams) => {
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }
  if (data) {
    data
    return (
      <>
        <Container>
          <Breadcrumbs crumbs={data.breadcrumbs} current={data.name} />
          <h1>{data.name}</h1>
          <span>{data.date}</span>
          <h1>{data.description}</h1>
        </Container>
      </>
    )
  } else {
    console.warn("empty render on AlbumDetail")
    return null
  }
}

export default AlbumDetail
