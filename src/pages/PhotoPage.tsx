import React from "react";
import { Image, Spinner } from "react-bootstrap";
import Photo from "../components/Photo";
import PhotoThumb from "../components/PhotoThumb";
import { useParams } from "react-router-dom";
import useApi from "../data";

function PhotoPage() {
  const { photoId } = useParams<{ photoId: string }>();
  const { photoQuery } = useApi();

  const { data, error, isError, isLoading } = photoQuery(photoId);
  console.log(data);

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
