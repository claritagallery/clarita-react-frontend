import React from "react";

import AlbumThumb from "./AlbumThumb";
import { APIError, AlbumListData } from "../data/types";
import { UseQueryResult } from "react-query";

type AlbumListParams = UseQueryResult<AlbumListData, APIError>;

const AlbumList = ({ data, error, isError, isLoading }: AlbumListParams) => {
  if (isLoading) {
    return <h2>Its loading</h2>;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }
  if (data) {
    const albums = data.results;
    console.log(albums);
    return (
      <>
        <div className="main-container">
          {albums.map((album) => (
            <AlbumThumb key={album.id} album={album} />
          ))}
        </div>
        {albums.length > 0 && <hr className="separator" />}
      </>
    );
  } else {
    console.warn("empty render on Album List");
    return null;
  }
};

export default AlbumList;
