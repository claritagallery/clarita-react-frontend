import {Card, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const PhotoThumb = ({photo, album_id}) => {
  const link = album_id ? `/albums/${album_id}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <Col>
      <LinkContainer to={link}>
        <Card>
          <Card.Img src={photo.thumb_url} alt={`Thumbnail for ${photo.name}`} thumbnail />
          <Card.Body>
            <Card.Text>{photo.name}</Card.Text>
          </Card.Body>
        </Card>
      </LinkContainer>
    </Col>
  );
};

export default PhotoThumb;
