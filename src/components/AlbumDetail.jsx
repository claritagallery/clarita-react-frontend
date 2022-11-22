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
        <h2>{data.name}</h2>
        <span>{data.date}</span>
        <p>{data.description}</p>
      </Container>
    </>
  );
};

export default AlbumDetail;
