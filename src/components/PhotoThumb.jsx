import { Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PhotoThumb = ({ photo, albumId }) => {
  const link = albumId
    ? `/albums/${albumId}/photos/${photo.id}`
    : `/photos/${photo.id}`;
  return (
    <Col xs={6} s={4} md={3} xl={2}>
      <LinkContainer to={link}>
        <Card>
          <Card.Body>
            <Card.Text>{photo.name}</Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default PhotoThumb;
