import {useState} from 'react';
import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PhotoThumb from './PhotoThumb';

const PHOTO = {
  id: "579349",
  filename: "FRS08016.jpg",
  name: "FRS08016.jpg",
  thumb_url: "https://lorempixel.com/120/120/",
  image_url: "https://lorempixel.com/1920/1080/",
  albums: [
    {
      id: 10617,
      name: "20211009-20211010 - Lisboa"
    }
  ],
  captions: [],
  prev: {
    "id": "579347",
    "filename": "FRS08442.jpg",
    "name": "FRS08442.jpg",
    "thumb_url": "https://lorempixel.com/120/120/"
  },
  next: {
    "id": "579351",
    "filename": "FRS08445.jpg",
    "name": "FRS08445.jpg",
    "thumb_url": "https://lorempixel.com/120/120/"
  },
};

function Photo({photo}) {
  return (
    <Image src={photo.image_url} alt={photo.filename} fluid />
  );
}

function PhotoInAlbumPage() {
  const [photo, setPhoto] = useState(PHOTO);
  const album = photo.albums[0];

  return (
    <div>
      <Link to={`/albums/${album.id}`}>
        Back to {album.name}
      </Link>
      { photo.prev && <PhotoThumb photo={photo.prev} album_id={album.id} />}
      { photo.next && <PhotoThumb photo={photo.next} album_id={album.id} />}
      <Photo photo={PHOTO} />
    </div>
  )
}

export {Photo, PhotoInAlbumPage};
