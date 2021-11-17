import {useState} from 'react';
import {Spinner} from 'react-bootstrap';
import {useAxios} from 'use-axios-client';
import AlbumDetail from './AlbumDetail';

function AlbumDetailPage({match}) {
  const albumId = match.params.albumId;
  const {data, error, loading} = useAxios({url: `http://localhost:8000/api/v1/album/${albumId}`});
  console.log(data);
  console.log(error);
  console.log(loading);
  return (
    <>
      {loading && <Spinner/>}
      {error && <div>{ error.message }</div>}
      {data && <AlbumDetail album={data} /> }
    </>
  );
}

export default AlbumDetailPage;
