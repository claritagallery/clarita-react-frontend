import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Breadcrumbs from "./Breadcrumbs";
import PhotoThumb from "./PhotoThumb";

const AlbumDetail = ({ data, error, isError, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Container>
        <Breadcrumbs crumbs={data.breadcrumbs} current={data.name} />
        <h1>{data.name}</h1>
        <span>{data.date}</span>
        <h1>{data.description}</h1>
      </Container>
    </>
  );
};

export default AlbumDetail;
