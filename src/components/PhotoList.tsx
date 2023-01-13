import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import PhotoThumb from "./PhotoThumb";

type PhotoListParams = {
  albumId: string;
  data: object;
  error: string;
  isError: string;
  isLoading: boolean;
};

const PhotoList = ({ albumId, data, error, isError, isLoading }) => {
  console.log(data);
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
        <h2>Aqui van fotos</h2>
        {photos.map((photo) => (
          <PhotoThumb key={photo.id} photo={photo} albumId={albumId} />
        ))}
      </Row>
    </Container>
  );
};

export default PhotoList;
