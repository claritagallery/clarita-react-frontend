import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import AlbumThumb from "./AlbumThumb";

import { APIError, AlbumListData } from "../data/types";
import { UseQueryResult } from "react-query";

type AlbumListParams = UseQueryResult<AlbumListData, APIError>;

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
