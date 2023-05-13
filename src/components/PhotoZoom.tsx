import React, { useRef, useMemo, useEffect, useState, useCallback } from "react"
//import { BaseProps } from "../data/types"
import useScrollBlock from "../hooks/useScrollBlock"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
// const SCROLL_SENSITIVITY = 0.0005
// const MAX_ZOOM = 5
// const MIN_ZOOM = 1
import { PhotoData, BaseProps } from "../data/types"
interface PhotoZoomProps extends BaseProps {
  photo: string
  isLoading: boolean | undefined
}

// const normalizeArgs = (args: { [key: string]: any }): any => {
//   const newArgs = {}

//   Object.keys(args).forEach((key) => {
//     const normalizedKey = key.split(".")
//     const isNested = normalizedKey.length === 2

//     if (isNested) {
//       if (!newArgs[normalizedKey[0]]) {
//         newArgs[normalizedKey[0]] = {}
//       }
//       newArgs[normalizedKey[0]][normalizedKey[1]] = args[key]
//     } else {
//       newArgs[key] = args[key]
//     }
//   })

//   return {
//     ...newArgs,
//     onTransformed: undefined,
//     onWheelStart: undefined,
//     onWheel: undefined,
//     onWheelStop: undefined,
//     onZoomStart: undefined,
//     onZoom: undefined,
//     onZoomStop: undefined,
//     onPanningStart: undefined,
//     onPanning: undefined,
//     onPanningStop: undefined,
//     onPinchStart: undefined,
//     onPinch: undefined,
//     onPinchStop: undefined,
//   }
// }
function PhotoZoom({ photo, isLoading }: PhotoZoomProps) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [container, setContainer] = useState<HTMLDivElement | null>(null)

  const [containerWidth, setContainerWidth] = useState<number>(0)
  const [containerHeight, setContainerHeight] = useState<number>(0)

  const [imageNaturalWidth, setImageNaturalWidth] = useState<number>(0)
  const [imageNaturalHeight, setImageNaturalHeight] = useState<number>(0)
  const alt = "example"
  const backgroundColor = "black"
  const scaleUp = true
  const zoomFactor = 8

  const imageScale = useMemo(() => {
    if (
      containerWidth === 0 ||
      containerHeight === 0 ||
      imageNaturalWidth === 0 ||
      imageNaturalHeight === 0
    )
      return 0
    const scale = Math.min(
      containerWidth / imageNaturalWidth,
      containerHeight / imageNaturalHeight,
    )
    return scaleUp ? scale : Math.max(scale, 1)
  }, [scaleUp, containerWidth, containerHeight, imageNaturalWidth, imageNaturalHeight])

  const handleResize = useCallback(() => {
    if (container !== null) {
      const rect = container.getBoundingClientRect()
      setContainerWidth(rect.width)
      setContainerHeight(rect.height)
    } else {
      setContainerWidth(0)
      setContainerHeight(0)
    }
  }, [container])
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  const handleImageOnLoad = (image: HTMLImageElement) => {
    setImageNaturalWidth(image.naturalWidth)
    setImageNaturalHeight(image.naturalHeight)
  }

  useEffect(() => {
    const image = new Image()
    image.onload = () => handleImageOnLoad(image)
    image.src = photo
  }, [photo])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor,
      }}
      ref={(el: HTMLDivElement | null) => setContainer(el)}
    >
      {imageScale > 0 && (
        <TransformWrapper
          key={`${containerWidth}x${containerHeight}`}
          initialScale={imageScale}
          minScale={imageScale}
          maxScale={imageScale * zoomFactor}
          centerOnInit

          // {...normalizeArgs(args)}
        >
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "100%",
            }}
          >
            <img
              alt={alt}
              src={photo}
              className={` animation-wrapper ${isLoading && "blurred-picture"}`}
            />
          </TransformComponent>
        </TransformWrapper>
      )}
    </div>
  )
}

export default PhotoZoom
