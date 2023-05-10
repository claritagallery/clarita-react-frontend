import React, { useRef, useMemo, useEffect, useState } from "react"
import { BaseProps } from "../data/types"
import useScrollBlock from "../hooks/useScrollBlock"
// type PhotoZoomParams = {
//   image: string
//   isLoading: boolean | undefined
// }

const SCROLL_SENSITIVITY = 0.0005
const MAX_ZOOM = 5
const MIN_ZOOM = 0.1

function PhotoZoom({ image, isLoading, exit, toggleHeader }) {
  // useEffect(() => toggleHeader(false), [])

  const [blockScroll, allowScroll] = useScrollBlock()
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false) //

  const touch = useRef({ x: 0, y: 0 })
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const observer = useRef(null)
  const background = useMemo(() => new Image(), [image])

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

  function handleWheel(event) {
    const { deltaY } = event
    blockScroll()
    setZoom((zoom) => clamp(zoom + deltaY * SCROLL_SENSITIVITY * -1, MIN_ZOOM, MAX_ZOOM))
  }

  function handleMouseMove(event) {
    if (dragging) {
      blockScroll()
      console.log(touch)
      console.log(event)

      const { x, y } = touch.current
      const { clientX, clientY } = event
      setOffset({
        x: offset.x + (x - clientX),
        y: offset.y + (y - clientY),
      })
      touch.current = { x: clientX, y: clientY }
    }
  }

  function handleMouseDown(event) {
    blockScroll()
    const { clientX, clientY } = event

    touch.current = { x: clientX, y: clientY }
    setDragging(true)
    console.log(touch.current)
  }

  const handleMouseUp = () => setDragging(false)

  function draw() {
    if (canvasRef.current) {
      const { width, height } = canvasRef.current
      const context = canvasRef.current.getContext("2d")

      // Set canvas dimensions
      canvasRef.current.width = width
      canvasRef.current.height = height

      // Clear canvas and scale it
      context.translate(-offset.x, -offset.y)
      context.scale(zoom, zoom)
      context.clearRect(0, 0, width, height)

      // Make sure we're zooming to the center
      const x = (context.canvas.width / zoom - background.width) / 2
      const y = (context.canvas.height / zoom - background.height) / 2

      // Draw image
      context.drawImage(background, x, y)
    }
  }

  useEffect(() => {
    if (!observer.current) return
    observer.current = new ResizeObserver((entries) => {
      entries.forEach(({ target }) => {
        const { width, height } = background
        // If width of the container is smaller than image, scale image down
        if (target.clientWidth < width) {
          // Calculate scale
          const scale = target.clientWidth / width

          // Redraw image
          canvasRef.current.width = width * scale
          canvasRef.current.height = height * scale
          canvasRef.current
            .getContext("2d")
            .drawImage(background, 0, 0, width * scale, height * scale)
        }
      })
    })
    observer.current.observe(containerRef.current)

    return () => observer.current.unobserve(containerRef.current)
  }, [])

  useEffect(() => {
    background.src = image

    if (canvasRef.current) {
      background.onload = () => {
        // Get the image dimensions
        const { width, height } = background
        canvasRef.current.width = width
        canvasRef.current.height = height

        // Draw the image
        canvasRef.current.getContext("2d").drawImage(background, 0, 0)
      }
    }
  }, [background])
  useEffect(() => {
    draw()
  }, [zoom])
  return (
    <div ref={containerRef} className="canvas-container">
      <canvas
        onClick={exit}
        className="full-photo-zoomed"
        onWheel={handleWheel}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  )
}

export default PhotoZoom
//className = "full-photo"
