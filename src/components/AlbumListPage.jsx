import React from 'react';
import {useAxios} from 'use-axios-client';
import {Spinner} from 'react-bootstrap';
import AlbumList from './AlbumList';


const AlbumListPage = () => {
  const {data, error, loading} = useAxios({url: "http://localhost:8000/api/v1/albums"});
  return (
    <>
      {loading && <Spinner/>}
      {error && <div>{ error.message }</div>}
      {data && <AlbumList albums={data.results} />}
    </>
  );
}

export default AlbumListPage;
