import {Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AlbumThumb = ({album}) => (
  <Link to={`/albums/${album.id}`}>
    <div>
    <img src={album.thumb_url} alt={`Thumbnail for album ${album.name}`} />
      <span>{album.name}</span>
      <span>{album.date}</span>
    </div>
  </Link>
);

const PhotoThumb = ({photo, album_id}) => {
  const link = album_id ? `/albums/${album_id}/photos/${photo.id}` : `/photos/${photo.id}`;
  return (
    <Link to={link}>
      <div>
        <Image src={photo.thumb_url} alt={`Thumbnail for ${photo.name}`} thumbnail />
        <span>{photo.name}</span>
        <span>{photo.date}</span>
      </div>
    </Link>
  );
};

export {AlbumThumb, PhotoThumb};
