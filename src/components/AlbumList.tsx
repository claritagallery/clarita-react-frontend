import React from "react"

import AlbumThumb from "./AlbumThumb"
import { APIError, AlbumListData } from "../data/types"
import { UseQueryResult } from "react-query"
import AlbumThumbLoading from "./AlbumThumbLoading"
import ErrorBox from "./ErrorBox"

type AlbumListParams = UseQueryResult<AlbumListData, APIError>

const AlbumList = ({ data, error, isError, isLoading, refetch }: AlbumListParams) => {
  if (isLoading) {
    return <AlbumThumbLoading num={4} />
  }

  if (isError) {
    return (
      <ErrorBox
        title="An error ocurred while loading albums"
        error={error}
        refetch={refetch}
      />
    )
  }

  const albums = !isLoading && data ? data.results : []

  return (
    <>
      <div className="main-container">
        {albums.map((album) => (
          <AlbumThumb key={album.id} album={album} />
        ))}
      </div>
    </>
  )
}

export default AlbumList
