import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import PhotoThumb from "./PhotoThumb";

const PhotoList = ({ albumId, data, error, isError, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const photos = data.results;
  return (
    <Container>
      <Row>
        {photos.map((photo) => (
          <PhotoThumb key={photo.id} photo={photo} albumId={albumId} />
        ))}
      </Row>
    </Container>
  );
};

export default PhotoList;
