import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Spinner } from "react-bootstrap";
import PhotoList from "../components/PhotoList";
import { APIError } from "../data/types";

import { ListData, PhotoListItem } from "../data/types";
export type PhotoListData = ListData<PhotoListItem>;
function fetchPhotos() {
  return axios({
    url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/photos`,
    params: { limit: 100 },
  }).then((res) => res.data);
}

const PhotoListPage = () => {
  const photosQuery = useQuery<PhotoListData, APIError>("photos", fetchPhotos);
  return <PhotoList {...photosQuery} />;
};

export default PhotoListPage;
