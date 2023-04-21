import React, { useDeferredValue, useState, useEffect } from "react"

import AlbumThumb from "./AlbumThumb"
import { APIError, AlbumListData } from "../data/types"
import { UseQueryResult } from "react-query"

type AlbumListParams = UseQueryResult<AlbumListData, APIError>

const AlbumList = ({ data, error, isError, isLoading }: AlbumListParams) => {
  const [deferredAlbums, setDeferredAlbums] = useState(data)
  const deferredQuery = useDeferredValue(deferredAlbums)
  useEffect(() => setDeferredAlbums(data), [isLoading])
  if (isLoading) {
    const albums = deferredQuery ? deferredQuery.results : []

    return (
      <>
        <div className="main-container" style={{ opacity: "0.5" }}>
          {albums.map((album) => (
            <AlbumThumb key={album.id} album={album} />
          ))}
        </div>
      </>
    )
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }
  if (data) {
    const albums = data.results

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
  } else {
    console.warn("empty render on Album List")
    return null
  }
}

export default AlbumList
