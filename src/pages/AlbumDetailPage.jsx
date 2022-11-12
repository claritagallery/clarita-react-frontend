import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import AlbumDetail from '../components/AlbumDetail';
import AlbumList from '../components/AlbumList';
import PhotoList from '../components/PhotoList';

function fetchAlbum(albumId) {
  return axios(
    {url: `http://localhost:8000/api/v1/album/${albumId}`}
  ).then((res) => res.data);
}

function fetchAlbums(params) {
  return axios(
    {
      url: `http://localhost:8000/api/v1/albums`,
      params: params,
    }
  ).then((res) => res.data);
}

function fetchPhotos(params) {
  return axios(
    {
      url: `http://localhost:8000/api/v1/photos`,
      params: params,
    }
  ).then((res) => res.data);
}

function AlbumDetailPage({match}) {
  const albumId = match.params.albumId;
  const albumQuery = useQuery(
    ['album', albumId],
    () => fetchAlbum(albumId)
  );
  const childAlbumsQuery = useQuery(
    ['albums', {parent: albumId}],
    () => fetchAlbums({parent: albumId, limit: 100})
  );
  const photosQuery = useQuery(
    ['photos', {album: albumId}],
    () => fetchPhotos({album: albumId, limit: 50})
  );

  return (
    <>
      <AlbumDetail { ...albumQuery } />
      <AlbumList {...childAlbumsQuery} />
      <PhotoList {...photosQuery} albumId={albumId} />
    </>
  );
}

export default AlbumDetailPage;
