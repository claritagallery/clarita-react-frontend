import React from "react";
import axios from "axios";
import { Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Photo from "../components/Photo";
import PhotoThumb from "../components/PhotoThumb";

function fetchPhoto(photoId) {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/photo/${photoId}`,
  }).then((res) => res.data);
}

function PhotoPage({ match }) {
  const photoId = match.params.photoId;
  const { data, error, isError, isLoading } = useQuery(["photo", photoId], () =>
    fetchPhoto(photoId),
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return <Photo photo={data} />;
}

export default PhotoPage;
