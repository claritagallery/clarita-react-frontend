import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import AlbumThumb from "./AlbumThumb";

const AlbumList = ({ data, error, isError, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const albums = data.results;
  return (
    <Container>
      <Row>
        {albums.map((album) => (
          <AlbumThumb key={album.id} album={album} />
        ))}
      </Row>
    </Container>
  );
};

export default AlbumList;
