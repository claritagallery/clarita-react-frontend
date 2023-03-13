import React from "react";

import PhotoList from "../components/PhotoList";
import useApi from "../data";

const PhotoListPage = () => {
  const { photosQuery } = useApi();
  const photos = photosQuery({ limit: 100 });
  return <PhotoList {...photos} />;
};

export default PhotoListPage;
