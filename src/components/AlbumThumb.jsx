import { Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AlbumThumb = ({ album }) => (
  <Col xs={6} sm={4} md={3} xl={2}>
    <LinkContainer to={`/albums/${album.id}`}>
      <Card>
        <Card.Body>
          <Card.Text>{album.name}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{album.date}</Card.Footer>
      </Card>
    </LinkContainer>
  </Col>
);

export default AlbumThumb;
