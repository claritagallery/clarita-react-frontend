import React from 'react';
import {Container, Row} from 'react-bootstrap';
import AlbumThumb from './AlbumThumb';

class AlbumListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [
        {
          id: "1",
          name: "20200202 - Album 1",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
        {
          id: "2",
          name: "20200202 - Album 2",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
        {
          id: "3",
          name: "20200202 - Album 3",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
        {
          id: "4",
          name: "20200202 - Album 4",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
        {
          id: "5",
          name: "20200202 - Album 5",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
        {
          id: "6",
          name: "20200202 - Album 6",
          thumb_url: "https://lorempixel.com/120/120/",
          date: "2021-10-09",
        },
      ],
    };
  }
  render() {
    return <AlbumList albums={this.state.albums} />;
  }
}

const AlbumList = ({albums}) => (
  <Container>
    <Row>
      {albums.map(album =>
        <AlbumThumb key={album.id} album={album} />
      )}
    </Row>
  </Container>
)

export default AlbumListPage;
