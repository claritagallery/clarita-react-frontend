import React from "react";
import Breadcrumbs from "./Breadcrumbs";

import { APIError, AlbumDetailItem } from "../data/types";
export interface AlbumDetailParams {
  data?: AlbumDetailItem;
  error: APIError;
  isError: boolean;
  isLoading: boolean;
}

const AlbumDetail = ({ data, error, isError, isLoading }: AlbumDetailParams) => {
  if (isLoading) {
    return <h2>Its loading</h2>;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }
  if (data) {
    data;
    return (
      <>
        <div>
          {/* <span>{data.breadcrumbs}</span> <span>{data.name}</span>
          <h1>{data.name}</h1>
          <span>{data.date}</span>
          <h1>{data.description}</h1> */}
        </div>
      </>
    );
  } else {
    console.warn("empty render on AlbumDetail");
    return null;
  }
};

export default AlbumDetail;
