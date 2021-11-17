import {useState} from 'react';
import {Image, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useAxios} from 'use-axios-client';
import Photo from './Photo';
import PhotoThumb from './PhotoThumb';

function PhotoInAlbumPage({match}) {
  const albumId = match.params.albumId;
  const photoId = match.params.photoId;
  const {data, error, loading} = useAxios({url: `http://localhost:8000/api/v1/album/${albumId}/photo/${photoId}`});
  return (
    <>
      {loading && <Spinner/>}
      {error && <div>{ error.message }</div>}
      {data && <Photo photo={data} album_id={albumId} /> }
    </>
  );
}

export default PhotoInAlbumPage;
