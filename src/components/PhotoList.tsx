import React from "react"
import PhotoAlbum from "react-photo-album"
import { Link } from "react-router-dom"
import photoUrl from "../utils/photoUrl"
import { PhotoListItem, APIError } from "../data/types"
import getRandomPic from "../data/apiPhoto"

export interface PhotoListParams {
  albumId?: string
  data?: {
    next: boolean | null | string
    total: number
    results: PhotoListItem[]
  }
  error: APIError
  isError: boolean
  isLoading: boolean
}

const PhotoList = ({ albumId, data, error, isError, isLoading }: PhotoListParams) => {
  data
  if (isLoading) {
    return <h1>its charging boy</h1>
  }

  if (isError) {
    return <div>{error ? error.message : "Unknown error"}</div>
  }

  if (data) {
    const photos = data.results

    const photosParameters = photos.map((photo) => {
      const { imgSrc, height, width } = getRandomPic()
      return {
        src: imgSrc,
        width: width,
        height: height,
        title: photo.name,
        date: photo.date_and_time,
        id: photo.id,
      }
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
              {renderDefaultPhoto({ wrapped: true })}

              <Link to={photoUrl(photo.id, albumId)}>
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
