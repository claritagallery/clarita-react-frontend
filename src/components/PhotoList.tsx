import React, { useCallback, useRef } from "react"
import PhotoAlbum from "react-photo-album"
import { Link } from "react-router-dom"
import photoUrl from "../utils/photoUrl"
import { APIError, PhotoListData } from "../data/types"
import getRandomPic from "../data/apiPhoto"
import Loader from "./Loader"
import { UseInfiniteQueryResult } from "react-query"
import ErrorBox from "./ErrorBox"

export interface PhotoListParams {
  photosQuery: UseInfiniteQueryResult<PhotoListData, APIError>
  albumId?: string
}

const PhotoList = ({ photosQuery, albumId }: PhotoListParams) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isError,
    error,
    refetch,
  } = photosQuery
  const intObserver = useRef<IntersectionObserver | null>(null)
  const setObserver = useCallback(
    (photo: HTMLElement | null) => {
      if (isLoading) {
        return
      }
      if (intObserver.current) {
        intObserver.current.disconnect()
      }
      intObserver.current = new IntersectionObserver((photo) => {
        if (photo[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      })
      if (photo) {
        intObserver.current.observe(photo)
      }
    },
    [isLoading, fetchNextPage, hasNextPage],
  )

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <ErrorBox
        title="An error ocurred while loading photos:"
        error={error}
        retry={refetch}
      />
    )
  }

  if (data) {
    const photos = data.pages.flatMap((obj) => {
      return obj.results.map((photo, i, arr) => {
        const { imgSrc, height, width } = getRandomPic()
        return {
          src: imgSrc,
          width: width,
          height: height,
          title: photo.title,
          date: photo.date_and_time,
          id: photo.id,
          isLast: i + 1 === arr.length,
        }
      })
    })

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

                <div className="picture-info" ref={photo.isLast ? setObserver : null}>
                  {photo.title && <h4 className="picture-title"> {photo.title}</h4>}
                  <h5 className="picture-date">{photo.date}</h5>
                </div>
              </Link>
            </div>
          )}
          layout="rows"
          photos={photos}
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
        {isFetchingNextPage && <Loader />}
      </div>
    )
  } else {
    console.warn("empty render on PhotoList")
    return null
  }
}

export default PhotoList
