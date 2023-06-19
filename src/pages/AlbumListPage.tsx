import React, { useEffect } from "react"
import AlbumList from "../components/AlbumList"
import useApi from "../data"

const AlbumListPage = () => {
  const { albumsQuery } = useApi()
  const query = albumsQuery({ limit: 100 })

  return <AlbumList {...query} />
}

export default AlbumListPage
