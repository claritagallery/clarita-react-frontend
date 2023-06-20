import React from "react"
import { APIError } from "../data/types"

interface ErrorBoxParams {
  title: string
  retry: () => void
  error: APIError
}

function ErrorBox({ title, error, retry }: ErrorBoxParams) {
  const message = error instanceof Error ? error.message : "Unknown error"
  const retryFetch = (e: { stopPropagation: () => void }) => {
    e.stopPropagation()
    retry()
  }
  return (
    <div className="error-container">
      <h1>Oh no!</h1>
      <h2>{title}</h2>
      <h2>{message}</h2>
      <button className="error-button" onClick={retryFetch}>
        Try again
      </button>
    </div>
  )
}
export default ErrorBox
