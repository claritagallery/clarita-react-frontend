import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Spinner } from 'react-bootstrap';
import PhotoList from '../components/PhotoList';

function fetchPhotos() {
  return axios(
    {
      url: `http://localhost:8000/api/v1/photos`,
      params: {limit: 100},
    }
  ).then((res) => res.data);
}

const PhotoListPage = () => {
  const photosQuery = useQuery('photos', fetchPhotos);
  return <PhotoList { ...photosQuery } />
}

export default PhotoListPage;
