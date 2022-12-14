import { Card, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

const PhotoThumb = ({ photo, albumId }) => {
  const link = albumId ? `/albums/${albumId}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <Col xs={6} s={4} md={3} xl={2}>
      <Link to={link}>
        <Card>
          <Card.Body>
            <Card.Text>{photo.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PhotoThumb;
