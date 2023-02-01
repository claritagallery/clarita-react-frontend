import React from "react";
import axios from "axios";
import { Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Photo from "../components/Photo";
import PhotoThumb from "../components/PhotoThumb";
import { useParams } from "react-router-dom";
import { APIError } from "../pages/AlbumDetailPage"; //TODO// ORGANIZE ALL TYPESCRIPT VARIABLES SEPARATE FILE

type PhotoId = string | undefined;

type Caption = {
  language?: string;
  text?: string;
};

type BreadCrumbs = {
  id: string;
  name: string;
  date?: string;
};

export type PreviousOrNext = {
  id: string;
  filename: string;
  name: string;
  date_and_time: string;
};
export type Next = PreviousOrNext | null;
export interface PhotoData {
  id: PhotoId;
  filename: string;
  name: string;
  date_and_time: null;
  image_url: string;
  caption: Caption[];
  breadcrumbs: BreadCrumbs[];
  prev: PreviousOrNext;
  next: Next;
}

function fetchPhoto(photoId: PhotoId) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/photo/${photoId}`,
  }).then((res) => res.data);
}

function PhotoPage() {
  const { photoId } = useParams<{ photoId: string }>();

  const { data, error, isError, isLoading } = useQuery<PhotoData, APIError>(
    ["photo", photoId],
    () => fetchPhoto(photoId),
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }

  return data ? (
    <>
      {" "}
      <Photo photo={data} />{" "}
    </>
  ) : (
    <h1>No Photos here</h1>
  );
}
export default PhotoPage;
