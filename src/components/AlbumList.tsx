import React from "react"

import AlbumThumb from "./AlbumThumb"
import { APIError, AlbumListData } from "../data/types"
import { UseQueryResult } from "react-query"
import { ImageIcon } from "./Icons"
import AlbumThumbLoading from "./AlbumThumbLoading"

type AlbumListParams = UseQueryResult<AlbumListData, APIError>

const AlbumList = ({ data, error, isError, isLoading }: AlbumListParams) => {
  if (isLoading) {
    return <AlbumThumbLoading />
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  const albums = !isLoading && data ? data.results : []

  return (
    <>
      <div className="main-container">
        {albums.map((album) => (
          <AlbumThumb key={album.id} album={album} />
        ))}
      </div>
      {albums.length > 0 && <hr className="separator" />}
    </>
  )
}

export default AlbumList
