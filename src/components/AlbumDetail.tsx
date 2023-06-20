import React from "react"
import BreadCrumbs from "./BreadCrumbs"
import ErrorBox from "./ErrorBox"
import { APIError, AlbumDetailItem } from "../data/types"
import { UseQueryResult } from "react-query"

interface AlbumDetailParams {
  query: UseQueryResult<AlbumDetailItem, APIError>
}

const AlbumDetail = ({ query }: AlbumDetailParams) => {
  const { data, error, isError, isLoading, refetch } = query
  if (isLoading) {
    return (
      <div className="album-detail-wrap">
        <div className="loading-info">
          {" "}
          <div className="animation-album-name"></div>
          <div className="animation-album-description"></div>
        </div>

        <BreadCrumbs breadcrumbs={[]} bg={false} isLoading={isLoading} />
      </div>
    )
  }

  if (isError) {
    return (
      <ErrorBox
        title="An error ocurred while loading this album:"
        error={error}
        retry={refetch}
      />
    )
  }
  if (data) {
    return (
      <>
        <div className="album-detail-wrap">
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
