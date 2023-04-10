import React from "react";

import Photo from "../components/Photo";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../data";

type PhotoPageProps = {
  toggleHeader: React.Dispatch<React.SetStateAction<boolean>>;
};

function PhotoPage({ toggleHeader }: PhotoPageProps) {
  useEffect(() => {
    toggleHeader(false);
    return () => toggleHeader(true);
  }, [toggleHeader]);

  const { photoId } = useParams<{ photoId: string }>();
  const { photoQuery } = useApi();

  const { data, error, isError, isLoading } = photoQuery(photoId);
  console.log(data);

  if (isLoading) {
    return <h1>Its loading</h1>;
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>;
  }

  return data ? (
    <>
      {" "}
      <Photo photo={data} />{" "}
    </>
  ) : (
    <h1>No Photos here</h1>
  );
}
export default PhotoPage;
