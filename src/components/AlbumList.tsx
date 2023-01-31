import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import AlbumThumb from "./AlbumThumb";
import { AlbumListData, APIError } from "../pages/AlbumDetailPage"; //corregir

export interface AlbumListParams {
  data?: AlbumListData;
  error: APIError;
  isError: boolean;
  isLoading: boolean;
}

const AlbumList = ({ data, error, isError, isLoading }: AlbumListParams) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }
  if (data) {
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
  } else {
    console.warn("empty render on Album List");
    return null;
  }
};

export default AlbumList;
