import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Spinner } from 'react-bootstrap';
import AlbumList from './AlbumList';

function fetchAlbums() {
  return axios(
    {url: `http://localhost:8000/api/v1/albums`}
  ).then((res) => res.data);
}

const AlbumListPage = () => {
  const albumsQuery = useQuery('albums', fetchAlbums);
  return <AlbumList { ...albumsQuery } />
}

export default AlbumListPage;
