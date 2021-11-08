import {Card, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const AlbumThumb = ({album}) => (
  <Col>
    <LinkContainer to={`/albums/${album.id}`}>
      <Card>
        <Card.Img src={album.thumb_url} alt={`Thumbnail for album ${album.name}`} thumbnail />
        <Card.Body>
          <Card.Text>
            {album.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{album.date}</Card.Footer>
      </Card>
    </LinkContainer>
  </Col>
);

export default AlbumThumb;
