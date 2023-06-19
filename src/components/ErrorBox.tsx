import React from "react"
import { APIError } from "../data/types"

interface ErrorBoxParams {
  title: string
  refetch: () => void
  error: APIError
}

function ErrorBox({ title, error, refetch }: ErrorBoxParams) {
  const message = error instanceof Error ? error.message : "Unknown error"

  return (
    <div className="error-page">
      <div className="error-container">
        <h1>Oh no!</h1>
        <h2>{title}</h2>
        <h2>{message}</h2>
        <button
          className="error-button"
          onClick={(e) => {
            e.stopPropagation()
            refetch()
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
export default ErrorBox
