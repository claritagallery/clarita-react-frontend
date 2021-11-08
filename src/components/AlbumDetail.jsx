import {useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import PhotoThumb from './PhotoThumb';

const ALBUM = {
  "id": "10617",
  "name": "20211009-20211010 - Lisboa",
  "thumb_url": "https://lorempixel.com/120/120/",
  "date": "2021-10-09",
  "description": "",
  "photos": [
    {
      "id": "579315",
      "filename": "FRS07918.jpg",
      "name": "FRS07918.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579317",
      "filename": "FRS07922.jpg",
      "name": "FRS07922.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579319",
      "filename": "FRS07927.jpg",
      "name": "FRS07927.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579321",
      "filename": "FRS07931.jpg",
      "name": "FRS07931.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579323",
      "filename": "FRS07941.jpg",
      "name": "FRS07941.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579325",
      "filename": "FRS07945.jpg",
      "name": "FRS07945.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579327",
      "filename": "FRS07955.jpg",
      "name": "FRS07955.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579329",
      "filename": "FRS07963.jpg",
      "name": "FRS07963.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579331",
      "filename": "FRS07968.jpg",
      "name": "FRS07968.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579333",
      "filename": "FRS07974.jpg",
      "name": "FRS07974.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579335",
      "filename": "FRS07995.jpg",
      "name": "FRS07995.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579337",
      "filename": "FRS08006.jpg",
      "name": "FRS08006.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579339",
      "filename": "FRS08008.jpg",
      "name": "FRS08008.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579341",
      "filename": "FRS08010.jpg",
      "name": "FRS08010.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579343",
      "filename": "FRS08011.jpg",
      "name": "FRS08011.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579345",
      "filename": "FRS08013.jpg",
      "name": "FRS08013.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579347",
      "filename": "FRS08014.jpg",
      "name": "FRS08014.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579349",
      "filename": "FRS08016.jpg",
      "name": "FRS08016.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579351",
      "filename": "FRS08017.jpg",
      "name": "FRS08017.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579353",
      "filename": "FRS08025.jpg",
      "name": "FRS08025.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579355",
      "filename": "FRS08028.jpg",
      "name": "FRS08028.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579357",
      "filename": "FRS08034.jpg",
      "name": "FRS08034.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579359",
      "filename": "FRS08037.jpg",
      "name": "FRS08037.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579361",
      "filename": "FRS08039.jpg",
      "name": "FRS08039.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579363",
      "filename": "FRS08045.jpg",
      "name": "FRS08045.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579365",
      "filename": "FRS08048.jpg",
      "name": "FRS08048.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579367",
      "filename": "FRS08062.jpg",
      "name": "FRS08062.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579369",
      "filename": "FRS08065.jpg",
      "name": "FRS08065.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579371",
      "filename": "FRS08067.jpg",
      "name": "FRS08067.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579373",
      "filename": "FRS08068.jpg",
      "name": "FRS08068.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579375",
      "filename": "FRS08069.jpg",
      "name": "FRS08069.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579377",
      "filename": "FRS08071.jpg",
      "name": "FRS08071.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579379",
      "filename": "FRS08076.jpg",
      "name": "FRS08076.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579381",
      "filename": "FRS08083.jpg",
      "name": "FRS08083.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579383",
      "filename": "FRS08085.jpg",
      "name": "FRS08085.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579385",
      "filename": "FRS08088.jpg",
      "name": "FRS08088.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579387",
      "filename": "FRS08089.jpg",
      "name": "FRS08089.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579389",
      "filename": "FRS08092.jpg",
      "name": "FRS08092.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579391",
      "filename": "FRS08099.jpg",
      "name": "FRS08099.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579393",
      "filename": "FRS08104.jpg",
      "name": "FRS08104.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579395",
      "filename": "FRS08105.jpg",
      "name": "FRS08105.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579397",
      "filename": "FRS08107.jpg",
      "name": "FRS08107.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579399",
      "filename": "FRS08109.jpg",
      "name": "FRS08109.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579401",
      "filename": "FRS08112.jpg",
      "name": "FRS08112.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579403",
      "filename": "FRS08114.jpg",
      "name": "FRS08114.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579405",
      "filename": "FRS08116.jpg",
      "name": "FRS08116.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579407",
      "filename": "FRS08117.jpg",
      "name": "FRS08117.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579409",
      "filename": "FRS08121.jpg",
      "name": "FRS08121.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579411",
      "filename": "FRS08122.jpg",
      "name": "FRS08122.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579413",
      "filename": "FRS08127.jpg",
      "name": "FRS08127.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579415",
      "filename": "FRS08130.jpg",
      "name": "FRS08130.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579417",
      "filename": "FRS08131.jpg",
      "name": "FRS08131.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579419",
      "filename": "FRS08134.jpg",
      "name": "FRS08134.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579421",
      "filename": "FRS08136.jpg",
      "name": "FRS08136.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579423",
      "filename": "FRS08142.jpg",
      "name": "FRS08142.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579425",
      "filename": "FRS08144.jpg",
      "name": "FRS08144.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579427",
      "filename": "FRS08151.jpg",
      "name": "FRS08151.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579429",
      "filename": "FRS08154.jpg",
      "name": "FRS08154.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579431",
      "filename": "FRS08170.jpg",
      "name": "FRS08170.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579433",
      "filename": "FRS08174.jpg",
      "name": "FRS08174.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579435",
      "filename": "FRS08179.jpg",
      "name": "FRS08179.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579437",
      "filename": "FRS08184.jpg",
      "name": "FRS08184.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579439",
      "filename": "FRS08190.jpg",
      "name": "FRS08190.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579441",
      "filename": "FRS08193.jpg",
      "name": "FRS08193.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579443",
      "filename": "FRS08195.jpg",
      "name": "FRS08195.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579445",
      "filename": "FRS08200.jpg",
      "name": "FRS08200.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579447",
      "filename": "FRS08224.jpg",
      "name": "FRS08224.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579449",
      "filename": "FRS08234.jpg",
      "name": "FRS08234.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579451",
      "filename": "FRS08249.jpg",
      "name": "FRS08249.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579453",
      "filename": "FRS08251.jpg",
      "name": "FRS08251.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579455",
      "filename": "FRS08257.jpg",
      "name": "FRS08257.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579457",
      "filename": "FRS08260.jpg",
      "name": "FRS08260.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579459",
      "filename": "FRS08262.jpg",
      "name": "FRS08262.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579461",
      "filename": "FRS08263.jpg",
      "name": "FRS08263.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579463",
      "filename": "FRS08265.jpg",
      "name": "FRS08265.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579465",
      "filename": "FRS08267.jpg",
      "name": "FRS08267.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579467",
      "filename": "FRS08270.jpg",
      "name": "FRS08270.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579469",
      "filename": "FRS08272.jpg",
      "name": "FRS08272.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579471",
      "filename": "FRS08276.jpg",
      "name": "FRS08276.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579473",
      "filename": "FRS08281.jpg",
      "name": "FRS08281.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579475",
      "filename": "FRS08287.jpg",
      "name": "FRS08287.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579477",
      "filename": "FRS08293.jpg",
      "name": "FRS08293.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579479",
      "filename": "FRS08295.jpg",
      "name": "FRS08295.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579481",
      "filename": "FRS08298.jpg",
      "name": "FRS08298.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579483",
      "filename": "FRS08301.jpg",
      "name": "FRS08301.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579485",
      "filename": "FRS08306.jpg",
      "name": "FRS08306.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579487",
      "filename": "FRS08308.jpg",
      "name": "FRS08308.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579489",
      "filename": "FRS08309.jpg",
      "name": "FRS08309.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579491",
      "filename": "FRS08317.jpg",
      "name": "FRS08317.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579493",
      "filename": "FRS08322.jpg",
      "name": "FRS08322.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579495",
      "filename": "FRS08332.jpg",
      "name": "FRS08332.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579497",
      "filename": "FRS08338.jpg",
      "name": "FRS08338.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579499",
      "filename": "FRS08341.jpg",
      "name": "FRS08341.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579501",
      "filename": "FRS08352.jpg",
      "name": "FRS08352.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579503",
      "filename": "FRS08357.jpg",
      "name": "FRS08357.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579505",
      "filename": "FRS08360.jpg",
      "name": "FRS08360.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579507",
      "filename": "FRS08388.jpg",
      "name": "FRS08388.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579509",
      "filename": "FRS08392.jpg",
      "name": "FRS08392.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579511",
      "filename": "FRS08401.jpg",
      "name": "FRS08401.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579513",
      "filename": "FRS08405.jpg",
      "name": "FRS08405.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579515",
      "filename": "FRS08411.jpg",
      "name": "FRS08411.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579517",
      "filename": "FRS08412.jpg",
      "name": "FRS08412.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579519",
      "filename": "FRS08415.jpg",
      "name": "FRS08415.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579521",
      "filename": "FRS08417.jpg",
      "name": "FRS08417.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579523",
      "filename": "FRS08418.jpg",
      "name": "FRS08418.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579525",
      "filename": "FRS08419.jpg",
      "name": "FRS08419.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579527",
      "filename": "FRS08420.jpg",
      "name": "FRS08420.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579529",
      "filename": "FRS08424.jpg",
      "name": "FRS08424.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579531",
      "filename": "FRS08434.jpg",
      "name": "FRS08434.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579533",
      "filename": "FRS08440.jpg",
      "name": "FRS08440.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    },
    {
      "id": "579535",
      "filename": "FRS08442.jpg",
      "name": "FRS08442.jpg",
      "thumb_url": "https://lorempixel.com/120/120/"
    }
  ]
};

function AlbumDetailPage({match}) {
  const [album, setAlbum] = useState(ALBUM);

  return (
    <AlbumDetail album={album} />
  );
}

const AlbumDetail = ({album}) => (
  <>
    <LinkContainer to={`/albums/${album.id}`}>
      <Container>
        <h2>{album.name}</h2>
        <span>{album.date}</span>
        <p>{album.description}</p>
      </Container>
    </LinkContainer>
    <Container>
      <Row xs={1} s={2} md={4} xl={6}>
        { album.photos.map((photo) => <PhotoThumb key={photo.id} photo={photo} album_id={album.id} />) }
      </Row>
    </Container>
  </>
);

export default AlbumDetailPage;
