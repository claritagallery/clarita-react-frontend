import React, { useEffect } from "react"
import PhotoAlbum from "react-photo-album"
import { Link } from "react-router-dom"
import photoUrl from "../utils/photoUrl"
import { APIError, PhotoListData } from "../data/types"
import getRandomPic from "../data/apiPhoto"
import Loader from "./Loader"
import { UseInfiniteQueryResult } from "react-query"

export interface PhotoListParams {
  photoQuery: UseInfiniteQueryResult<PhotoListData, APIError>
  albumId?: string
}

const PhotoList = ({ photoQuery, albumId }: PhotoListParams) => {
  const { data, error, isError, isLoading } = photoQuery
  useEffect(() => {
    function onScroll(event: any) {
      const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        if (photoQuery.hasNextPage) {
          console.log("I have another page")
          photoQuery.fetchNextPage()
        }
      }
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [photoQuery])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  if (data) {
    const photos = data.pages
    const photosParameters = photos
      .map((obj) => {
        return obj.results.map((photo) => {
          const { imgSrc, height, width } = getRandomPic()
          return {
            src: imgSrc,
            width: width,
            height: height,
            title: photo.title,
            date: photo.date_and_time,
            id: photo.id,
          }
        })
      })
      .flat()

    return (
      <div className="gallery-container">
        <PhotoAlbum
          renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
            <div
              className="picture-cell"
              style={{
                position: "relative",
                ...wrapperStyle,
              }}
            >
              <Link to={photoUrl(photo.id, albumId)}>
                {renderDefaultPhoto({ wrapped: true })}

                <div className="picture-info">
                  {photo.title && <h4 className="picture-title"> {photo.title}</h4>}
                  <h5 className="picture-date">{photo.date}</h5>
                </div>
              </Link>
            </div>
          )}
          layout="rows"
          photos={photosParameters}
          defaultContainerWidth={50}
          spacing={2}
          padding={2}
          targetRowHeight={(containerWidth) => {
            if (containerWidth >= 300 && containerWidth < 600) {
              return containerWidth / 2
            }
            if (containerWidth >= 600 && containerWidth < 1200) {
              return containerWidth / 4
            }
            if (containerWidth >= 1200) {
              return containerWidth / 8
            }
            return containerWidth / 4
          }}
        />
      </div>
    )
  } else {
    console.warn("empty render on PhotoList")
    return null
  }
}

export default PhotoList
