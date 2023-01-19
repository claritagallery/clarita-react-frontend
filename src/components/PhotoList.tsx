import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import PhotoThumb from "./PhotoThumb";

type PhotoListItem = {
  id: string;
  filename: string;
  name: string;
  date_and_time: string;
};

type PhotoListParams = {
  albumId?: string;
  data?: {
    next: boolean | null | string;
    total: number;
    results: PhotoListItem[];
  };
  error: unknown; //gotta fix this
  isError: boolean;
  isLoading: boolean;
};

const PhotoList = ({ albumId, data, error, isError, isLoading }: PhotoListParams) => {
  console.log(data);
  if (isLoading) {
    return <h1>its charging boy</h1>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  if (data) {
    const photos = data.results;
    return (
      <div>
        <Container>
          <Row>
            <h2>Aqui van fotos</h2>

            {photos.map((photo) => {
              return (
                <div key={photo.id}>
                  <PhotoThumb key={photo.id} photo={photo} albumId={albumId} />
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  } else {
    console.warn("empty render on PhotoList");
    return null;
  }
};

export default PhotoList;
