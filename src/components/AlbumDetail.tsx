import React from "react";
import BreadCrumbs from "./BreadCrumbs";

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
    console.log(data);

    return (
      <>
        <div className="breadcrumbs-album">
          <BreadCrumbs breadcrumbs={data.breadcrumbs} />
        </div>
      </>
    );
  } else {
    console.warn("empty render on AlbumDetail");
    return null;
  }
};

export default AlbumDetail;
