import React from "react"

interface ErrorBoxParams {
  title: string
  retry: () => void
  error: Error | string
}

function ErrorBox({ title, error, retry }: ErrorBoxParams) {
  const message = error instanceof Error ? error.message : error || "Unknown error"
  const retryFetch = (e: React.MouseEvent<HTMLButtonElement>) => {
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
