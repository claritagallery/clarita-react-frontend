import axios from 'axios';
import {Image, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import PhotoThumb from './PhotoThumb';


function Photo({photo, albumId}) {
  return (
    <>
      <Breadcrumbs crumbs={photo.breadcrumbs} current={photo.name} />
      { photo.prev && <PhotoThumb photo={photo.prev} albumId={albumId} />}
      { photo.next && <PhotoThumb photo={photo.next} albumId={albumId} />}
      <Image src={`http://localhost:8000/api/v1/photo/${photo.id}/file`} alt={photo.filename} fluid />
    </>
  );
}

export default Photo;
